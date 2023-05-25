from django.contrib import admin
from django.contrib.admin import StackedInline, TabularInline

from one.libraries.utils.admin import MasterModelAdmin
from one.workflow.workflowtransition.models import TransitionCondition, WorkflowTransition


class WorkflowTransitionInline(StackedInline):
    model = WorkflowTransition
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


class WorkflowTransitionConditionMappingInline(TabularInline):
    model = WorkflowTransition.conditions.through
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


@admin.register(TransitionCondition)
class TransitionConditionAdmin(MasterModelAdmin):
    pass


@admin.register(WorkflowTransition)
class WorkflowTransitionAdmin(MasterModelAdmin):
    inlines = [WorkflowTransitionConditionMappingInline]
