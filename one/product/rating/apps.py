from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class RatingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.product.rating"
    verbose_name = _("Rating")

    def ready(self):
        try:
            import one.product.rating.signals  # noqa: F401
        except ImportError:
            pass
