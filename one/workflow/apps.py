from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WorkflowConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.workflow"
    verbose_name = _("Workflow")

    def ready(self):
        try:
            import one.workflow.signals  # noqa: F401
        except ImportError:
            pass
