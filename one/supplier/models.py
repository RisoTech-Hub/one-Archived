from django.contrib.auth import get_user_model

from one.supplier.manager import SupplierManager

User = get_user_model()


class Supplier(User):
    objects = SupplierManager()

    class Meta:
        proxy = True
        verbose_name = "Supplier"
        verbose_name_plural = "Suppliers"
