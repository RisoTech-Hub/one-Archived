from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class PriceListConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.pricelist"
    verbose_name = _("Base Price List")

    def ready(self):
        try:
            import one.masterdata.pricelist.signals  # noqa: F401
        except ImportError:
            pass
