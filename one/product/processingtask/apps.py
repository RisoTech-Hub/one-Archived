from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ProcessingTaskConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.product.processingtask"
    verbose_name = _("Processing Task")

    def ready(self):
        try:
            import one.product.processingtask.signals  # noqa: F401
        except ImportError:
            pass
