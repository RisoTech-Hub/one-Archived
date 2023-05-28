from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WorkflowtransitionConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.workflow.workflowtransition"
    verbose_name = _("Workflow")

    def ready(self):
        try:
            import one.workflow.workflowtransition.signals  # noqa: F401
        except ImportError:
            pass
