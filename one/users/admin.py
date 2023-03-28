from allauth.account.models import EmailAddress
from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from one.users.forms import UserAdminChangeForm, UserAdminCreationForm

User = get_user_model()


class EmailAddressInline(admin.TabularInline):
    model = EmailAddress


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal info"), {"fields": ("name", "email")}),
        (
            _("Permissions"),
            {
                # "classes": ("collapse",),
                "description": "User permissions",
                "fields": (
                    # ("is_active", "is_staff", "is_superuser",),
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": (("last_login", "date_joined"),)}),
    )
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]
    inlines = [EmailAddressInline]
