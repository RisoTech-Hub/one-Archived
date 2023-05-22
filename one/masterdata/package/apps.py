from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class PackageConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.package"
    verbose_name = _("Master Data")

    def ready(self):
        try:
            import one.masterdata.package.signals  # noqa: F401
        except ImportError:
            pass
