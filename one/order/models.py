from django.utils.translation import gettext_lazy as _
from django.db.models import CASCADE, ForeignKey, Model
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel


class Order(TimeStampedModel, UserStampedModel):
    customer = ForeignKey("customer.Customer", verbose_name=_("Customer"), on_delete=CASCADE)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")
        db_table = "order_order"


class OrderLine(Model):
    order = ForeignKey(Order, verbose_name=_("Order"), on_delete=CASCADE, related_name="order_line")

    class Meta:
        verbose_name = _("Order Line")
        verbose_name_plural = _("Order Lines")
        db_table = "order_order_line"
