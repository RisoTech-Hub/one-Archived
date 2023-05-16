from django.db.models import CharField, ForeignKey, CASCADE, IntegerField, FloatField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.category.models import Category
from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM
from one.supplier.models import Supplier


class Product(TimeStampedModel, UserStampedModel):
    code = CharField(_("Code"), max_length=255)

    category = ForeignKey(Category, verbose_name=_("Category"), on_delete=CASCADE)
    sku = ForeignKey(SKU, verbose_name=_("SKU"), on_delete=CASCADE)
    oum = ForeignKey(UOM, verbose_name=_("OUM"), on_delete=CASCADE)

    quantity = IntegerField(_("Quantity"), default=0)

    supplier = ForeignKey(
        Supplier, verbose_name=_("Supplier"), on_delete=CASCADE, related_name="products", null=True, blank=True
    )

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        db_table = "product_product"

    def __str__(self):
        return self.code
