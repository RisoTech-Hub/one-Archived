from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class InvoiceConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.finance.invoice"
    verbose_name = _("Finance")

    def ready(self):
        try:
            import one.finance.invoice.signals  # noqa: F401
        except ImportError:
            pass
