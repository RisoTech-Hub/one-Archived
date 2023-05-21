from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.finance.invoice.models import Invoice, InvoiceLine
from one.libraries.utils.admin import GenericRelationTabularInline, ModelAdmin


class InvoiceLineInline(GenericRelationTabularInline):
    model = InvoiceLine
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


@admin.register(Invoice)
class InvoiceAdmin(ModelAdmin):
    inlines = (InvoiceLineInline,)
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("order", "status", "description", "total_amount")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("order", "status", "description", "total_amount")}),)
