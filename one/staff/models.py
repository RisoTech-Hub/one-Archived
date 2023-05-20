from django.contrib.auth import get_user_model

from .manager import StaffManager

User = get_user_model()


class Staff(User):
    objects = StaffManager()

    class Meta:
        proxy = True
        verbose_name = "Staff"
        verbose_name_plural = "Staffs"
