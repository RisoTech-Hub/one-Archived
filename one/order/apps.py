from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class OrderConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.order"
    verbose_name = _("Order")

    def ready(self):
        try:
            import one.order.signals  # noqa: F401
        except ImportError:
            pass
