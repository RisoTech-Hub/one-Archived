from attachments.admin import AttachmentInlines
from django.contrib import admin
from django.contrib.admin import TabularInline
from django.utils.translation import gettext_lazy as _

from one.finance.payment.models import Payment, PaymentLine
from one.libraries.utils.admin import BaseModelAdmin, ModelAdmin


@admin.register(PaymentLine)
class PaymentLineAdmin(BaseModelAdmin):
    inlines = [AttachmentInlines]


class PaymentLineInline(TabularInline):
    model = PaymentLine
    can_delete = True
    extra = 0
    exclude = ("status_changed",)


@admin.register(Payment)
class PaymentAdmin(ModelAdmin):
    inlines = [PaymentLineInline, AttachmentInlines]
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("invoice", "status", "payment_number", "transaction_code", "expiration_date")}),
                (_("Description"), {"fields": ("description", "total_amount", "received_amount")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("invoice", "status", "payment_number", "transaction_code", "expiration_date")}),
                (_("Description"), {"fields": ("description", "total_amount", "received_amount")}),
            )
