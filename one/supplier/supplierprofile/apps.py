from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SupplierProfileConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.supplier.supplierprofile"
    verbose_name = _("Supplier Profile")

    def ready(self):
        try:
            import one.supplier.supplierprofile.signals  # noqa: F401
        except ImportError:
            pass
