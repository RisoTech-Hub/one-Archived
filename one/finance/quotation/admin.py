from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.finance.quotation.models import Quotation, QuotationLine, SubQuotation
from one.libraries.utils.admin import GenericRelationTabularInline, ModelAdmin


class QuotationLineInline(GenericRelationTabularInline):
    model = QuotationLine
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


@admin.register(SubQuotation)
class SubQuotationAdmin(ModelAdmin):
    inlines = (QuotationLineInline,)
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("quotation", "total_amount")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("quotation", "total_amount")}),)


class SubQuotationInline(GenericRelationTabularInline):
    model = SubQuotation
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )


@admin.register(Quotation)
class OrderAdmin(ModelAdmin):
    inlines = (SubQuotationInline,)
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("order", "version", "status")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("order", "version", "status")}),)
