from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class InstallmentConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.installment"
    verbose_name = _("Installment")

    def ready(self):
        try:
            import one.masterdata.installment.signals  # noqa: F401
        except ImportError:
            pass
