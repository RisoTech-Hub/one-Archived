from django.contrib import admin
from django.contrib.admin import TabularInline

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.pricelist.models import PriceLine, PriceList


class PriceLineInline(TabularInline):
    model = PriceLine
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


@admin.register(PriceList)
class PriceListAdmin(MasterModelAdmin):
    def get_inlines(self, request, obj=None):
        inlines = super().get_inlines(request, obj)
        if obj is None:
            return inlines
        return inlines + (PriceLineInline,)  # noqa

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("level",)
        return fieldsets
