from django.db.models import CASCADE, ForeignKey, IntegerField, Model
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.category.models import Category
from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM


class Order(TimeStampedModel, UserStampedModel):
    customer = ForeignKey("customer.Customer", verbose_name=_("Customer"), on_delete=CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")
        db_table = "order_order"


class OrderLine(Model):
    order = ForeignKey(Order, verbose_name=_("Order"), on_delete=CASCADE, related_name="order_line")

    category = ForeignKey(Category, verbose_name=_("Category"), on_delete=CASCADE)
    sku = ForeignKey(SKU, verbose_name=_("SKU"), on_delete=CASCADE)
    oum = ForeignKey(UOM, verbose_name=_("OUM"), on_delete=CASCADE)

    quantity = IntegerField(_("Quantity"), default=0)

    class Meta:
        verbose_name = _("Order Line")
        verbose_name_plural = _("Order Lines")
        db_table = "order_order_line"
