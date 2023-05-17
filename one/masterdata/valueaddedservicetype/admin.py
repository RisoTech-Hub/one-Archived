from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin

from .models import ValueAddedServiceType


@admin.register(ValueAddedServiceType)
class ProcessingTaskTypeAdmin(MasterModelAdmin):
    filter_horizontal = ("processing_tasks",)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += (
            "is_active",
            "processing_tasks",
        )
        return fieldsets
