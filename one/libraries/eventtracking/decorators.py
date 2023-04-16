from contextvars import ContextVar  # noqa

from django.contrib.admin.models import (
    ACTION_FLAG_CHOICES,
    ADDITION,
    CHANGE,
    DELETION,
    LogEntry,
)
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.contrib.sessions.models import Session
from django.utils.translation import gettext_lazy as _

from one.libraries.eventtracking.middleware import (
    get_current_user,
    get_request_ip,
    get_request_path,
)
from one.libraries.eventtracking.models import EventTracking
from one.libraries.eventtracking.utils import format_field_value, get_field_diff

root_event_token = ContextVar("root_event_token")
root_event_object = ContextVar("root_event")

previous_object_token = ContextVar("previous_object_token")
previous_object = ContextVar("previous_object")

ADMIN_ACTION = "ADMIN-ACTION"
NON_ADMIN_ACTION = "NON-ADMIN-ACTION"

EXCLUDE_MODELS = [ContentType, Permission, LogEntry, EventTracking, Session]
EXCLUDE_FIELDS = ["_state", "backend"]

ACTION_VERB_CHOICES = (
    (ADDITION, _("Added a")),
    (CHANGE, _("Changed the")),
    (DELETION, _("Deleted the")),
)


def is_admin_site_action():
    return get_request_path() is None or "admin" in get_request_path()


def model_event_pre_save_tracking(event_name=None):  # noqa: C901
    def decorator(func):
        def wrapper(*args, **kwargs):
            sender = kwargs.get("sender")
            if sender in EXCLUDE_MODELS or "Migration" in sender.__name__:
                return func(*args, **kwargs)

            is_admin_action = is_admin_site_action()
            event_prefix = ADMIN_ACTION if is_admin_action else NON_ADMIN_ACTION

            instance = kwargs.get("instance")
            try:
                content_type = ContentType.objects.get_for_model(sender)
            except Exception:  # noqa
                return func(*args, **kwargs)
            action_flag_id = ADDITION if not getattr(instance, "id", None) else CHANGE
            action_flag = dict(ACTION_FLAG_CHOICES)[action_flag_id]

            current_event_code = "{}.{}.{}.{}".format(
                event_prefix, action_flag, sender.__name__, instance.__str__()
            )

            try:
                root_event_code = root_event_object.get()
                if root_event_code == current_event_code:
                    return func(*args, **kwargs)

                current_event_code = "{} => {}".format(
                    root_event_code, current_event_code
                )
            except LookupError:
                root_event_code = current_event_code
                token = root_event_object.set(root_event_code)
                root_event_token.set(token)

            try:
                parent = previous_object.get()
            except LookupError:
                parent = None

            updated_fields = {}
            old_instance = sender.objects.filter(pk=instance.pk).first()
            if action_flag_id == CHANGE and old_instance:
                old_instance_dict = old_instance.__dict__
                instance_dict = instance.__dict__

                log = ""
                for field, value in instance_dict.items():
                    if field in EXCLUDE_FIELDS:
                        continue
                    try:
                        _field = sender._meta.get_field(field)  # noqa
                    except Exception:  # noqa
                        print("EXCEPTION: ", field)
                        continue
                    old_value = old_instance_dict.get(field)
                    if old_value != value:
                        if isinstance(value, str) and isinstance(old_value, str):
                            diff = get_field_diff(old_value, value)
                            if diff:
                                log = {
                                    "old_value": format_field_value(_field, old_value),
                                    "new_value": format_field_value(_field, value),
                                    "diff": diff,
                                }
                        else:
                            log = {
                                "old_value": format_field_value(_field, old_value),
                                "new_value": format_field_value(_field, value),
                                "diff": "",
                            }
                        updated_fields[field] = log

            user = get_current_user()
            ip = get_request_ip()

            if hasattr(instance, "pk"):
                object_id = instance.pk
            elif hasattr(instance, "id"):
                object_id = instance.id
            else:
                object_id = None

            event = EventTracking.objects.create(
                code=current_event_code,
                name=event_name
                or "'{}' {} {} {} '{}'".format(
                    user or _("System"),
                    dict(ACTION_VERB_CHOICES)[action_flag_id],
                    sender.__name__,
                    _("named"),
                    instance.__str__(),
                ),
                status=EventTracking.STATUS.STARTED,
                parent=parent,
                root_code=root_event_code,
                user=user,
                ip=ip,
                logs=updated_fields,
                content_type=content_type,
                object_id=object_id,
            )

            token = previous_object.set(event)
            previous_object_token.set(token)

            result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator


def model_event_post_save_tracking(event_name=None):
    def decorator(func):
        def wrapper(*args, **kwargs):
            sender = kwargs.get("sender")
            if sender in EXCLUDE_MODELS or "Migration" in sender.__name__:
                return func(*args, **kwargs)

            instance = kwargs.get("instance")

            try:
                event = previous_object.get()
                event.object_id = instance.pk
                event.status = EventTracking.STATUS.FINISHED
                event.save()
            except LookupError:
                pass

            result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator


def model_event_post_delete_tracking(event_name=None):
    def decorator(func):
        def wrapper(*args, **kwargs):
            sender = kwargs.get("sender")
            if sender in EXCLUDE_MODELS or "Migration" in sender.__name__:
                return func(*args, **kwargs)

            is_admin_action = is_admin_site_action()
            event_prefix = ADMIN_ACTION if is_admin_action else NON_ADMIN_ACTION

            instance = kwargs.get("instance")

            current_event_code = event_name or "{}.POST_DELETE.{}.{}".format(
                event_prefix, sender.__name__, instance.__str__()
            )

            try:
                root_event_code = root_event_object.get()
                if root_event_code == current_event_code:
                    return func(*args, **kwargs)

                current_event_code = "{} => {}".format(
                    root_event_code, current_event_code
                )
            except LookupError:
                root_event_code = current_event_code
                token = root_event_object.set(root_event_code)
                root_event_token.set(token)

            result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator
