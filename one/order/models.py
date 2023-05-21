from django.db.models import CASCADE, ForeignKey, IntegerField, ManyToManyField, Model
from django.utils.translation import gettext_lazy as _
from model_utils import Choices

# from model_utils.fields import StatusField
from model_utils.models import StatusModel, TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.category.models import Category
from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM
from one.masterdata.valueaddedservicetype.models import ValueAddedServiceType
from one.product.models import Product


class Order(StatusModel, TimeStampedModel, UserStampedModel):
    ORDER_STATUS_DRAFT = "DRAFT"
    ORDER_STATUS_CONFIRMED = "CONFIRMED"
    ORDER_STATUS_IN_PROGRESS = "IN_PROGRESS"
    ORDER_STATUS_CANCELLED = "CANCELLED"
    ORDER_STATUS_COMPLETED = "COMPLETED"

    STATUS = Choices(
        (ORDER_STATUS_DRAFT, _("Draft")),
        (ORDER_STATUS_CONFIRMED, _("Confirmed")),
        (ORDER_STATUS_IN_PROGRESS, _("In Progress")),
        (ORDER_STATUS_CANCELLED, _("Cancelled")),
        (ORDER_STATUS_COMPLETED, _("Completed")),
    )

    customer = ForeignKey("customer.Customer", verbose_name=_("Customer"), on_delete=CASCADE)

    value_added_service_type = ManyToManyField(
        ValueAddedServiceType, verbose_name=_("Value Added Service Type"), blank=True
    )

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")
        db_table = "order_order"

    def __str__(self):
        return "{} #{} {} {}".format(self._meta.verbose_name.title(), self.id, _("Customer"), self.customer)


class OrderLine(Model):
    order = ForeignKey(Order, verbose_name=_("Order"), on_delete=CASCADE, related_name="order_line")

    category = ForeignKey(Category, verbose_name=_("Category"), on_delete=CASCADE)
    sku = ForeignKey(SKU, verbose_name=_("SKU"), on_delete=CASCADE)
    oum = ForeignKey(UOM, verbose_name=_("OUM"), on_delete=CASCADE)

    quantity = IntegerField(_("Quantity"), default=0)

    products = ManyToManyField(Product, through="OrderLineProduct")

    class Meta:
        verbose_name = _("Order Line")
        verbose_name_plural = _("Order Lines")
        db_table = "order_order_line"


class OrderLineProduct(Model):
    order_line = ForeignKey(OrderLine, verbose_name=_("Order Line"), on_delete=CASCADE)
    product = ForeignKey(Product, verbose_name=_("Product"), on_delete=CASCADE)
    quantity = IntegerField(_("Quantity"), default=1)

    class Meta:
        verbose_name = _("Order Line Product")
        verbose_name_plural = _("Order Line Products")
        db_table = "order_order_line_product"
