from django.db.models import CASCADE, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.workflow.models import Workflow


class WorkflowStep(MasterModel, TimeStampedModel, UserStampedModel):
    workflow = ForeignKey(Workflow, related_name="steps", on_delete=CASCADE)

    class Meta:
        verbose_name = _("Workflow Step")
        verbose_name_plural = _("Workflow Steps")
        db_table = "workflow_workflow_step"

    def __str__(self):
        return f"{self.name}"
