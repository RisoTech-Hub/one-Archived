from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ValueAddedServiceTypeConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.valueaddedservicetype"
    verbose_name = _("Master Data")

    def ready(self):
        try:
            import one.masterdata.valueaddedservicetype.signals  # noqa: F401
        except ImportError:
            pass
