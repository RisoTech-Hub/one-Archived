from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CategoryConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.category"
    verbose_name = _("Category")

    def ready(self):
        try:
            import one.masterdata.category.signals  # noqa: F401
        except ImportError:
            pass
