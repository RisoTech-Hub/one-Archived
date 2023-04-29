from django.contrib.auth.forms import UserCreationForm

from one.customer.models import Customer


class CustomerAdminCreationForm(UserCreationForm):
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        user.account_type = Customer.ACCOUNT_TYPE_CUSTOMER
        if commit:
            user.save()
        return user
