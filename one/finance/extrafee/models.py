from django.db.models import CASCADE, DecimalField, FloatField, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.extrafeetype.models import ExtraFeeType
from one.product.models import Product
from one.product.processingtask.models import ProcessingTask


class ExtraFee(TimeStampedModel, UserStampedModel):
    extra_fee_type = ForeignKey(
        ExtraFeeType, verbose_name=_("Extra Fee Type"), on_delete=CASCADE, null=True, blank=True
    )
    product = ForeignKey(Product, verbose_name=_("Product"), on_delete=CASCADE, null=True, blank=True)
    processing_task = ForeignKey(ProcessingTask, verbose_name=_("Processing Task"), on_delete=CASCADE)

    unit_price = DecimalField(_("Unit Price"), max_digits=20, decimal_places=2, default=0.00)
    unit_percentage = FloatField(_("Percentage"), blank=True, null=True, default=0)

    quantity = FloatField(_("Quantity"), blank=True, null=True, default=1)
    unit_amount = DecimalField(_("Unit Amount"), max_digits=20, decimal_places=2, default=0.00)
    total_amount = DecimalField(_("Total Amount"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Extra Fee")
        verbose_name_plural = _("Extra Fees")
        db_table = "finance_extra_fee"

    def __str__(self):
        return self.extra_fee_type.name
