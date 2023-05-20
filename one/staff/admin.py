from django.contrib import admin

from one.users.admin import UserAdmin

from .forms import StaffAdminCreationForm
from .models import Staff


@admin.register(Staff)
class CustomerAdmin(UserAdmin):
    add_form = StaffAdminCreationForm
