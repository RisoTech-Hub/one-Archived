from django.contrib import admin
from django.contrib.contenttypes.models import ContentType
from django.db.models import Q

from one.libraries.utils.admin import MasterModelAdmin
from one.workflow.models import Workflow
from one.workflow.workflowstep.admin import WorkflowStepInline
from one.workflow.workflowtransition.admin import WorkflowTransitionInline


@admin.register(Workflow)
class WorkflowAdmin(MasterModelAdmin):
    inlines = [WorkflowStepInline, WorkflowTransitionInline]

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("triggered_by",)
        return fieldsets

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("triggered_by",)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):  # noqa
        if db_field.name == "triggered_by":
            if hasattr(self.model, "BASE_MODEL_ALLOWED"):
                q_objects = Q()
                for white_class in self.model.BASE_MODEL_ALLOWED:
                    q_objects |= Q(**white_class)
                kwargs["queryset"] = ContentType.objects.filter(q_objects)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
