from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import GenericRelationAdmin, MasterModelAdmin
from one.workflow.workflowinstance.models import WorkflowInstance


@admin.register(WorkflowInstance)
class WorkflowInstanceAdmin(GenericRelationAdmin, MasterModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by", "content_object")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("workflow", "current_step", "status")}),
                (_("Workflow for"), {"fields": ("content_type", "object_id")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("workflow", "current_step", "status")}),
                (_("Workflow for"), {"fields": ("content_type", "object_id")}),
            )

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("status", "workflow", "current_step")
