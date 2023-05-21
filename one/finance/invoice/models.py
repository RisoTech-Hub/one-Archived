from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, CharField, DecimalField, FloatField, ForeignKey, PositiveIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.order.models import Order


class Invoice(StatusModel, TimeStampedModel, UserStampedModel):
    QUOTATION_STATUS_DRAFT = "1"
    QUOTATION_STATUS_SENT = "2"
    QUOTATION_STATUS_ACCEPTED = "3"
    QUOTATION_STATUS_REJECTED = "4"
    QUOTATION_STATUS_EXPIRED = "5"

    STATUS = Choices(
        (QUOTATION_STATUS_DRAFT, _("Draft")),
        (QUOTATION_STATUS_SENT, _("Sent")),
        (QUOTATION_STATUS_ACCEPTED, _("Accepted")),
        (QUOTATION_STATUS_REJECTED, _("Rejected")),
        (QUOTATION_STATUS_EXPIRED, _("Expired")),
    )

    order = ForeignKey(Order, verbose_name=_("Order"), on_delete=CASCADE, null=True, blank=True)

    description = CharField(_("Description"), max_length=2550, blank=True, null=True)

    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Invoice")
        verbose_name_plural = _("Invoices")
        db_table = "finance_invoice"


class InvoiceLine(TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "order", "model": "orderline"},
    ]
    invoice = ForeignKey(Invoice, verbose_name=_("Invoice"), on_delete=CASCADE, null=True, blank=True)

    # Based on Object
    base_content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    base_object_id = PositiveIntegerField()
    base_object = GenericForeignKey(ct_field="base_content_type", fk_field="base_object_id")

    description = CharField(_("Description"), max_length=2550, blank=True, null=True)

    unit_price = DecimalField(_("Unit Price"), max_digits=20, decimal_places=2, default=0.00)
    unit_percentage = FloatField(_("Percentage"), blank=True, null=True, default=0)

    quantity = FloatField(_("Quantity"), blank=True, null=True, default=1)
    unit_amount = DecimalField(_("Unit Amount"), max_digits=20, decimal_places=2, default=0.00)
    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Invoice Line")
        verbose_name_plural = _("Invoice Lines")
        db_table = "finance_invoice_line"
