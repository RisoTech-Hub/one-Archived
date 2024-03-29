from django.contrib import admin
from django.contrib.admin import TabularInline

from one.libraries.utils.admin import MasterModelAdmin

from .models import ExtraFeePriceLine, ExtraFeePriceList


class ExtraFeePriceLineInline(TabularInline):
    model = ExtraFeePriceLine
    can_delete = True
    extra = 0


@admin.register(ExtraFeePriceList)
class ExtraFeePriceListAdmin(MasterModelAdmin):
    inlines = (ExtraFeePriceLineInline,)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += (
            "customer",
            "effective_date",
            "expiry_date",
            "is_active",
        )
        return fieldsets
