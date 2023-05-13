from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import BaseUserManager

User = get_user_model()


class CustomerManager(BaseUserManager):
    def get_queryset(self):
        return super().get_queryset().filter(account_type=User.ACCOUNT_TYPE_CUSTOMER)  # noqa
