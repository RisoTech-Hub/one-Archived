from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SkuConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.sku"
    verbose_name = _("Master Data")

    def ready(self):
        try:
            import one.masterdata.sku.signals  # noqa: F401
        except ImportError:
            pass
