from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import GenericRelationAdmin, ModelAdmin
from one.product.processingtask.models import ProcessingTask


@admin.register(ProcessingTask)
class ProcessingTaskAdmin(GenericRelationAdmin, ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("processing_task_type", "status")}),
                (
                    _("Task For"),
                    {
                        "fields": (
                            "content_type",
                            "object_id",
                        )
                    },
                ),
                (_("Perform Stamped"), {"fields": ("performed_by", "performed_at")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("processing_task_type", "status")}),
                (
                    _("Task For"),
                    {
                        "fields": (
                            "content_type",
                            "object_id",
                        )
                    },
                ),
            )

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("status", "content_object", "performed_by", "performed_at", "created")
