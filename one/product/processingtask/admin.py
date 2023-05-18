from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import ModelAdmin
from one.product.processingtask.models import ProcessingTask


@admin.register(ProcessingTask)
class ProcessingTaskAdmin(ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("processing_task_type", "product")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("processing_task_type", "product")}),)
