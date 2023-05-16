from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SupplierLevelConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.supplier.supplierlevel"
    verbose_name = _("Supplier Level")

    def ready(self):
        try:
            import one.supplier.supplierlevel.signals  # noqa: F401
        except ImportError:
            pass
