from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin

from .models import ProcessingTaskType


@admin.register(ProcessingTaskType)
class ProcessingTaskTypeAdmin(MasterModelAdmin):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += (
            "extra_fee_type",
            "is_active",
        )
        return fieldsets
