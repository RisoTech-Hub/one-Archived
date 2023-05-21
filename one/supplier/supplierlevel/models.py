from django.db.models import CASCADE, ForeignKey, Model
from django.utils.translation import gettext_lazy as _

from one.masterdata.category.models import Category
from one.masterdata.level.models import Level
from one.masterdata.sku.models import SKU
from one.supplier.models import Supplier


class SupplierLevel(Model):
    """Model definition for Supplier Profile."""

    supplier = ForeignKey(Supplier, verbose_name=_("Supplier"), on_delete=CASCADE)

    category = ForeignKey(
        Category, verbose_name=_("Category"), blank=True, related_name="supplier_levels", on_delete=CASCADE
    )
    sku = ForeignKey(SKU, verbose_name=_("SKU"), blank=True, related_name="supplier_levels", on_delete=CASCADE)
    level = ForeignKey(Level, verbose_name=_("Level"), blank=True, related_name="supplier_levels", on_delete=CASCADE)

    class Meta:
        verbose_name = _("Supplier Level")
        verbose_name_plural = _("Supplier Levels")
        db_table = "supplier_level"
