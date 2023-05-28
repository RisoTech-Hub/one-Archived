from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WorkflowinstanceConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.workflow.workflowinstance"
    verbose_name = _("Workflow")

    def ready(self):
        try:
            import one.workflow.workflowinstance.signals  # noqa: F401
        except ImportError:
            pass
