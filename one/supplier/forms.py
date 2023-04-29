from django.contrib.auth.forms import UserCreationForm

from one.supplier.models import Supplier


class SupplierAdminCreationForm(UserCreationForm):
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.account_type = Supplier.ACCOUNT_TYPE_SUPPLIER
        if commit:
            user.save()
        return user
