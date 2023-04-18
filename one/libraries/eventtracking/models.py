from django.contrib.auth import get_user_model
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, SET_NULL, CharField, ForeignKey, JSONField, PositiveIntegerField, TextField
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

User = get_user_model()


class EventTracking(TimeStampedModel, StatusModel):
    STATUS = Choices(
        ("STARTED", _("Started")),
        ("FINISHED", _("Finished")),
    )

    code = CharField(_("Event Code"), max_length=255, blank=False, null=False)
    name = TextField(_("Event Name"), blank=False, null=False)

    user = ForeignKey(User, blank=True, null=True, on_delete=SET_NULL)
    ip = CharField(_("Request IP"), max_length=48, blank=True, null=True)

    logs = JSONField(verbose_name=_("Event Logs"), default=list, blank=True, null=True)

    parent = ForeignKey("self", blank=True, null=True, on_delete=CASCADE, related_name="event_children")
    root_code = CharField(_("Parent Event Code"), max_length=64, blank=True, null=True)

    # for generic relation
    content_type = ForeignKey(ContentType, on_delete=CASCADE)
    object_id = PositiveIntegerField(blank=True, null=True)
    content_object = GenericForeignKey()

    class Meta:
        verbose_name = _("Event Tracking")
        verbose_name_plural = _("Event Tracking")
        db_table = "logging_event_tracking"

    def __str__(self):
        return f"{self.name or self.code} {self.STATUS[self.status]}"
