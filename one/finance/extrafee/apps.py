from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ExtrafeeConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.finance.extrafee"
    verbose_name = _("Finance")

    def ready(self):
        try:
            import one.finance.extrafee.signals  # noqa: F401
        except ImportError:
            pass
