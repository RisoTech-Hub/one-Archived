from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.sku.models import SKU
from one.masterdata.uomconversion.admin import UOMConversionInline


@admin.register(SKU)
class SKUAdmin(MasterModelAdmin):
    inlines = [UOMConversionInline]

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += (
            "quantity_type",
            "base_uom",
            "point",
            "markup",
        )
        return fieldsets

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + (
            "base_uom",
            "point",
            "markup",
        )
