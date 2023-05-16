from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin

from .models import UOM


@admin.register(UOM)
class UOMAdmin(MasterModelAdmin):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("base_uom",)
        return fieldsets

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("code", "base_uom",)
