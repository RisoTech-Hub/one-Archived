from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class StaffConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.staff"
    verbose_name = _("Staff")

    def ready(self):
        try:
            import one.staff.signals  # noqa: F401
        except ImportError:
            pass
