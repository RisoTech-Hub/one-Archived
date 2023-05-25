from django.contrib.admin import TabularInline

from one.workflow.workflowstep.models import WorkflowStep


class WorkflowStepInline(TabularInline):
    model = WorkflowStep
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )
