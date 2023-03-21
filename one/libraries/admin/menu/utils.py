"""
Menu utilities.
"""
from importlib import import_module

from django.conf import settings
from django.urls import reverse


def _get_menu_cls(menu_cls, context):
    if isinstance(menu_cls, dict):
        curr_url = context.get("request").path
        for key in menu_cls:
            admin_site_mod, admin_site_inst = key.rsplit(".", 1)
            admin_site_mod = import_module(admin_site_mod)
            admin_site = getattr(admin_site_mod, admin_site_inst)
            admin_url = reverse(f"{admin_site.name}:index")
            if curr_url.startswith(admin_url):
                mod, inst = menu_cls[key].rsplit(".", 1)
                mod = import_module(mod)
                return getattr(mod, inst)
    else:
        mod, inst = menu_cls.rsplit(".", 1)
        mod = import_module(mod)
        return getattr(mod, inst)
    raise ValueError(f'Dashboard menu matching "{menu_cls}" not found')


def get_admin_menu(context):
    """
    Returns the admin menu defined by the user or the default one.
    """
    return _get_menu_cls(
        getattr(settings, "ADMIN_TOOLS_MENU", "one.libraries.admin.menu.DefaultMenu"),
        context,
    )()
