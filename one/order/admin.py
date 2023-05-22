from attachments.admin import AttachmentInlines
from django.contrib import admin
from django.contrib.admin import TabularInline
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import ModelAdmin
from one.order.models import Order, OrderLine


class OrderLineInline(TabularInline):
    model = OrderLine
    can_delete = True
    extra = 0


@admin.register(Order)
class OrderAdmin(ModelAdmin):
    inlines = (
        OrderLineInline,
        AttachmentInlines,
    )
    filter_horizontal = ("value_added_service_type",)
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("customer", "status")}),
                (_("Extra Services"), {"fields": ("value_added_service_type",)}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("customer", "status")}),
                (_("Extra Services"), {"fields": ("value_added_service_type",)}),
            )

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("status", "customer", "created", "modified")
