from django.db.models import CASCADE, Model, OneToOneField
from django.utils.translation import gettext_lazy as _

from one.customer.models import Customer


class CustomerProfile(Model):
    """Model definition for SupplierProfile."""

    supplier = OneToOneField(Customer, verbose_name=_("Customer Profile"), on_delete=CASCADE)
