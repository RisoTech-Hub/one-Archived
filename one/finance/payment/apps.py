from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class PaymentConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.finance.payment"
    verbose_name = _("Payment")

    def ready(self):
        try:
            import one.finance.payment.signals  # noqa: F401
        except ImportError:
            pass
