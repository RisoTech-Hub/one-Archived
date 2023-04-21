from allauth.account.forms import SignupForm
from allauth.socialaccount.forms import SignupForm as SocialSignupForm
from django.core.exceptions import ValidationError
from django.forms import BooleanField
from django.utils.translation import gettext_lazy as _


class UserSignupForm(SignupForm):
    """
    Form that will be rendered on a user sign up section/screen.
    Default fields will be added automatically.
    Check UserSocialSignupForm for accounts created from social.
    """

    tnc = BooleanField(
        required=True,
        error_messages={"required": _("You must accept the terms and conditions")},
    )

    def clean_toc(self):
        if not self.cleaned_data["tnc"]:
            raise ValidationError(_("You must accept the terms and conditions"))
        return self.cleaned_data["tnc"]

    def save(self, request):
        user = super().save(request)
        user.tnc = self.cleaned_data.get("tnc")
        user.save()
        return user


class UserSocialSignupForm(SocialSignupForm):
    """
    Renders the form when user has signed up using social accounts.
    Default fields will be added automatically.
    See UserSignupForm otherwise.
    """
