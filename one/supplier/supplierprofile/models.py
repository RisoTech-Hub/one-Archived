from django.db.models import CASCADE, ManyToManyField, Model, OneToOneField
from django.utils.translation import gettext_lazy as _

from one.masterdata.category.models import Category
from one.masterdata.sku.models import SKU
from one.supplier.models import Supplier


class SupplierProfile(Model):
    """Model definition for Supplier Profile."""

    supplier = OneToOneField(Supplier, verbose_name=_("Supplier Profile"), on_delete=CASCADE)

    favorite_category = ManyToManyField(
        Category, verbose_name=_("Favorite Categories"), blank=True, related_name="suppliers"
    )
    favorite_sku = ManyToManyField(SKU, verbose_name=_("Favorite SKUs"), blank=True, related_name="suppliers")

    class Meta:
        verbose_name = _("Supplier Profile")
        verbose_name_plural = _("Supplier Profiles")
        db_table = "supplier_profile"
