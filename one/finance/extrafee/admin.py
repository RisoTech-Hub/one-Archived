from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.finance.extrafee.models import ExtraFee
from one.libraries.utils.admin import ModelAdmin


@admin.register(ExtraFee)
class ExtraFeeAdmin(ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("extra_fee_type", "product", "processing_task")}),
                (_("Price"), {"fields": ("unit_price", "unit_percentage", "quantity", "unit_amount", "total_amount")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("extra_fee_type", "product", "processing_task")}),
                (_("Price"), {"fields": ("unit_price", "unit_percentage", "quantity", "unit_amount", "total_amount")}),
            )
