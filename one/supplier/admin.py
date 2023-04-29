from django.contrib import admin

from one.users.admin import UserAdmin

from .forms import SupplierAdminCreationForm
from .models import Supplier


@admin.register(Supplier)
class SupplierAdmin(UserAdmin):
    add_form = SupplierAdminCreationForm
