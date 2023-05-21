from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, DecimalField, FloatField, ForeignKey, PositiveIntegerField, SmallIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.order.models import Order


class Quotation(StatusModel, TimeStampedModel, UserStampedModel):
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
    version = SmallIntegerField(_("Version"), default=1)

    class Meta:
        verbose_name = _("Quotation")
        verbose_name_plural = _("Quotations")
        db_table = "finance_quotation"


class SubQuotation(TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "level", "model": "level"},
    ]

    quotation = ForeignKey(Quotation, verbose_name=_("Quotation"), on_delete=CASCADE, null=True, blank=True)
    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    # Based on Object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    class Meta:
        verbose_name = _("Quotation Sub")
        verbose_name_plural = _("Quotation Subs")
        db_table = "finance_quotation_sub"


class QuotationLine(TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "order", "model": "orderline"},
    ]
    sub_quotation = ForeignKey(SubQuotation, verbose_name=_("Sub Quotation"), on_delete=CASCADE, null=True, blank=True)

    # Based on Object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    unit_price = DecimalField(_("Unit Price"), max_digits=20, decimal_places=2, default=0.00)
    unit_percentage = FloatField(_("Percentage"), blank=True, null=True, default=0)

    quantity = FloatField(_("Quantity"), blank=True, null=True, default=1)
    unit_amount = DecimalField(_("Unit Amount"), max_digits=20, decimal_places=2, default=0.00)
    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Quotation Line")
        verbose_name_plural = _("Quotation Lines")
        db_table = "finance_quotation_line"
