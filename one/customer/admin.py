from django.contrib import admin

from one.users.admin import UserAdmin

from .customerprofile.admin import CustomerProfileInline
from .forms import CustomerAdminCreationForm
from .models import Customer


@admin.register(Customer)
class CustomerAdmin(UserAdmin):
    add_form = CustomerAdminCreationForm

    inlines = [CustomerProfileInline]
