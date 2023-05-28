from django.db.models import CASCADE, BooleanField, ForeignKey, ManyToManyField, Model
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.workflow.models import Workflow
from one.workflow.workflowstep.models import WorkflowStep


class TransitionCondition(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Transition Condition")
        verbose_name_plural = _("Transition Conditions")
        db_table = "workflow_transition_condition"

    def __str__(self):
        return f"{self.name}"


class WorkflowTransition(MasterModel, TimeStampedModel, UserStampedModel):
    workflow = ForeignKey(Workflow, verbose_name=_("Workflow"), on_delete=CASCADE)
    from_step = ForeignKey(
        WorkflowStep, verbose_name=_("From Step"), related_name="transitions_from", on_delete=CASCADE
    )
    to_step = ForeignKey(WorkflowStep, verbose_name=_("To Step"), related_name="transitions_to", on_delete=CASCADE)
    conditions = ManyToManyField(TransitionCondition, through="TransitionConditionMapping")

    class Meta:
        verbose_name = _("Workflow Transition")
        verbose_name_plural = _("Workflow Transitions")
        db_table = "workflow_transition"

    def __str__(self):
        return f"{self.name}"


class TransitionConditionMapping(Model):
    transition = ForeignKey(WorkflowTransition, on_delete=CASCADE)
    condition = ForeignKey(TransitionCondition, on_delete=CASCADE)
    is_required = BooleanField(default=False)

    class Meta:
        verbose_name = _("Transition Condition Mapping")
        verbose_name_plural = _("Transition Condition Mappings")
        db_table = "workflow_transition_condition_mapping"

    def __str__(self):
        return f"{self.transition.from_step.name} -> {self.transition.to_step.name}: {self.condition.name}"
