from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ExtraFeePriceListConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.extrafeepricelist"
    verbose_name = _("Master Data")
