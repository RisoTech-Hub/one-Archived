from django.db.models import ForeignKey, CASCADE, DateField, Model, CharField, DecimalField, FloatField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.customer.models import Customer
from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.extrafeetype.models import ExtraFeeType


class ExtraFee(MasterModel, TimeStampedModel, UserStampedModel):
    customer = ForeignKey(
        Customer, verbose_name=_("Customer"), related_name="extra_fees", on_delete=CASCADE, null=True, blank=True
    )
    effective_date = DateField(_("Effective Date"), blank=False, null=False)
    expiry_date = DateField(_("Expiry Date"), blank=False, null=False)

    class Meta:
        verbose_name = _("Extra Fee")
        verbose_name_plural = _("Extra Fees")
        db_table = "finance_extra_fee"


class ExtraFeeLine(Model):
    CALCULATE_TYPE_PERCENTAGE = "PERCENTAGE"
    CALCULATE_TYPE_FIXED_AMOUNT = "FIXED_AMOUNT"
    CALCULATE_TYPE_MULTIPLY_QUANTITY = "MULTIPLY_QUANTITY"

    CALCULATE_TYPE_CHOICES = (
        (CALCULATE_TYPE_FIXED_AMOUNT, _("Fixed Amount")),
        (CALCULATE_TYPE_MULTIPLY_QUANTITY, _("Multiply Quantity")),
        (CALCULATE_TYPE_PERCENTAGE, _("Percentage")),
    )

    extra_fee = ForeignKey(
        ExtraFee,
        verbose_name=_("Extra Fee"),
        related_name="extra_fee_lines",
        on_delete=CASCADE,
        blank=False,
        null=False,
    )

    extra_fee_type = ForeignKey(
        ExtraFeeType,
        verbose_name=_("Extra Fee"),
        on_delete=CASCADE,
        blank=False,
        null=False,
    )

    calculate_type = CharField(
        _("Calculate Type"),
        max_length=20,
        choices=CALCULATE_TYPE_CHOICES,
        default=CALCULATE_TYPE_FIXED_AMOUNT,
    )
    unit_price = DecimalField(_("Price"), max_digits=20, decimal_places=2, default=0.00)
    percentage_price = FloatField(_("Percentage"), blank=True, null=True)

    class Meta:
        verbose_name = _("Extra Fee Line")
        verbose_name_plural = _("Extra Fee Lines")
        db_table = "finance_extra_fee_line"
