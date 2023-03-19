from constance import config
from django.contrib.admin import AdminSite as DjangoAdminSite
from django.utils.translation import gettext_lazy as _


class AdminSite(DjangoAdminSite):
    site_header = _(config.ADMIN_SITE_HEADER)
    site_title = _(config.ADMIN_SITE_TITLE)
    index_title = _(config.ADMIN_INDEX_TITLE)
