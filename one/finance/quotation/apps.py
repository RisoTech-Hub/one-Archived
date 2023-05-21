from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class QuotationConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.finance.quotation"
    verbose_name = _("Finance")

    def ready(self):
        try:
            import one.finance.quotation.signals  # noqa: F401
        except ImportError:
            pass
