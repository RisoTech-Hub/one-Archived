from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ExtraFeeTypeConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.extrafeetype"
    verbose_name = _("Master Data")
