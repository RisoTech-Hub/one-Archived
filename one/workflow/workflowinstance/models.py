from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, SET_NULL, ForeignKey, PositiveIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.workflow.models import Workflow
from one.workflow.workflowstep.models import WorkflowStep


class WorkflowInstance(StatusModel, MasterModel, TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = Workflow.BASE_MODEL_ALLOWED
    WORKFLOW_STATUS_IN_PROGRESS = "in_progress"
    WORKFLOW_STATUS_FINISHED = "finished"
    STATUS = Choices(
        (WORKFLOW_STATUS_IN_PROGRESS, _("In Progress")),
        (WORKFLOW_STATUS_FINISHED, _("Finished")),
    )

    workflow = ForeignKey(Workflow, verbose_name=_("Workflow"), on_delete=CASCADE)
    current_step = ForeignKey(WorkflowStep, verbose_name=_("Current step"), on_delete=SET_NULL, null=True, blank=True)

    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    class Meta:
        verbose_name = _("Workflow Instance")
        verbose_name_plural = _("Workflow Instances")
        db_table = "workflow_instance"

    def __str__(self):
        return f"{self.name}"
