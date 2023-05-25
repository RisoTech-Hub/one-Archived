from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WorkFlowStepConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.workflow.workflowstep"
    verbose_name = _("Workflow Step")

    def ready(self):
        try:
            import one.workflow.workflowstep.signals  # noqa: F401
        except ImportError:
            pass
