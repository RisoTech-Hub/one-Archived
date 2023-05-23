from django.contrib.auth.models import AbstractUser
from django.db.models import BooleanField, CharField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from model_utils import Choices
from model_utils.fields import StatusField
from model_utils.models import StatusModel


class User(AbstractUser, StatusModel):
    """
    Default custom user model for One.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"

    STATUS = Choices(
        (ONLINE, _("Online")),
        (OFFLINE, _("Offline")),
    )

    ACCOUNT_TYPE_PROVIDER = "PROVIDER"
    ACCOUNT_TYPE_STAFF = "STAFF"
    ACCOUNT_TYPE_SUPPLIER = "SUPPLIER"
    ACCOUNT_TYPE_CUSTOMER = "CUSTOMER"
    ACCOUNT_TYPE = Choices(
        (ACCOUNT_TYPE_PROVIDER, _("Platform Provider")),
        (ACCOUNT_TYPE_STAFF, _("Platform Staff")),
        (ACCOUNT_TYPE_SUPPLIER, _("Supplier")),
        (ACCOUNT_TYPE_CUSTOMER, _("Customer")),
    )

    # First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)

    account_type = StatusField(_("Account Type"), choices_name="ACCOUNT_TYPE", default=ACCOUNT_TYPE_PROVIDER)

    tnc = BooleanField(_("Terms and conditions"), default=False)

    def __str__(self):
        return self.name if self.name else self.username

    def get_absolute_url(self) -> str:
        """Get URL for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})
