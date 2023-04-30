from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class LevelConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.level"
    verbose_name = _("Supplier Level")

    def ready(self):
        try:
            import one.masterdata.level.signals  # noqa: F401
        except ImportError:
            pass
