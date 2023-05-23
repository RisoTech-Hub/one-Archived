from django.db.models import CASCADE, CharField, DateField, DecimalField, ForeignKey, IntegerField, Model
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

from one.finance.invoice.models import Invoice
from one.libraries.utils.models import UserStampedModel


class Payment(StatusModel, TimeStampedModel, UserStampedModel):
    PAYMENT_STATUS_DRAFT = "draft"
    PAYMENT_STATUS_SENT = "sent"
    PAYMENT_STATUS_RECEIVING = "receiving"
    PAYMENT_STATUS_RECEIVED = "received"
    PAYMENT_STATUS_ACCEPTED = "accepted"
    PAYMENT_STATUS_REJECTED = "rejected"

    STATUS = Choices(
        (PAYMENT_STATUS_DRAFT, _("Draft")),
        (PAYMENT_STATUS_SENT, _("Sent")),
        (PAYMENT_STATUS_RECEIVING, _("Receiving")),
        (PAYMENT_STATUS_RECEIVED, _("Received")),
        (PAYMENT_STATUS_ACCEPTED, _("Accepted")),
        (PAYMENT_STATUS_REJECTED, _("Rejected")),
    )

    invoice = ForeignKey(Invoice, verbose_name=_("Invoice"), on_delete=CASCADE, related_name="payments")
    payment_number = IntegerField(_("Payment Number"), default=1)
    transaction_code = CharField(_("Transaction Code"), max_length=255, blank=True, default="")
    expiration_date = DateField(_("Expiration Date"), blank=True, null=True)
    description = CharField(_("Description"), max_length=2550, blank=True, null=True)
    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    received_amount = DecimalField(_("Received Amount"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Payment")
        verbose_name_plural = _("Payments")
        db_table = "finance_payment"


class PaymentLine(StatusModel, Model):
    STATUS = Choices(
        (Payment.PAYMENT_STATUS_RECEIVED, _("Received")),
        (Payment.PAYMENT_STATUS_ACCEPTED, _("Accepted")),
        (Payment.PAYMENT_STATUS_REJECTED, _("Rejected")),
    )
    payment = ForeignKey(
        Payment, verbose_name=_("Payment"), on_delete=CASCADE, null=True, blank=True, related_name="payment_lines"
    )

    recipient = CharField(_("Recipient Code"), max_length=2550, blank=True, default="")
    description = CharField(_("Description"), max_length=2550, blank=True, default="")
    amount = DecimalField(_("Amount"), max_digits=20, decimal_places=2, default=0.00)
    payment_date = DateField(_("Payment Date"), blank=True, null=True)

    class Meta:
        verbose_name = _("Payment Line")
        verbose_name_plural = _("Payment Lines")
        db_table = "finance_payment_line"
