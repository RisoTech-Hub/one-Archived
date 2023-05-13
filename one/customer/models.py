from django.contrib.auth import get_user_model

from one.customer.manager import CustomerManager

User = get_user_model()


class Customer(User):
    objects = CustomerManager()

    class Meta:
        proxy = True
        verbose_name = "Customer"
        verbose_name_plural = "Customers"
