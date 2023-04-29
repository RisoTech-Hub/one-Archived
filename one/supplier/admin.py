from django.contrib import admin

from one.users.admin import UserAdmin

from .forms import SupplierAdminCreationForm
from .models import Supplier
from .supplierprofile.admin import SupplierProfileInline


@admin.register(Supplier)
class SupplierAdmin(UserAdmin):
    add_form = SupplierAdminCreationForm
    inlines = [SupplierProfileInline]
