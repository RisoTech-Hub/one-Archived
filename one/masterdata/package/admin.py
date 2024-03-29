from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin

from .models import Package


@admin.register(Package)
class PackageAdmin(MasterModelAdmin):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("is_active",)
        return fieldsets
