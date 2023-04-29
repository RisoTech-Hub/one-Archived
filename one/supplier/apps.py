from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SupplierConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.supplier"
    verbose_name = _("Supplier")

    def ready(self):
        try:
            import one.supplier.signals  # noqa: F401
        except ImportError:
            pass
