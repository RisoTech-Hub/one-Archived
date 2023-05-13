from django.db.models import CASCADE, Model, OneToOneField
from django.utils.translation import gettext_lazy as _

from one.supplier.models import Supplier


class SupplierProfile(Model):
    """Model definition for Supplier Profile."""

    supplier = OneToOneField(Supplier, verbose_name=_("Supplier Profile"), on_delete=CASCADE)

    class Meta:
        verbose_name = _("Supplier Profile")
        verbose_name_plural = _("Supplier Profiles")
        db_table = "supplier_profile"
