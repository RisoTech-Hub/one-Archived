from django.contrib import admin
from django.contrib.admin import TabularInline, ModelAdmin
from django.utils.translation import gettext_lazy as _
from one.order.models import Order, OrderLine


class OrderLineInline(TabularInline):
    model = OrderLine
    can_delete = True
    extra = 0


@admin.register(Order)
class PriceListAdmin(ModelAdmin):
    inlines = (OrderLineInline,)

    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("customer",)}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("customer",)}),)
