from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import ModelAdmin
from one.product.models import Product


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("supplier", "code")}),
                (_("Product"), {"fields": ("category", "sku", "oum", "quantity")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("supplier", "code")}),
                (_("Product"), {"fields": ("category", "sku", "oum", "quantity")}),
            )

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("category", "sku", "oum", "quantity", "supplier")
