"""
Menu template tags, the following menu tags are available:

 * ``{% admin_tools_render_menu %}``
 * ``{% admin_tools_render_menu_item %}``
 * ``{% admin_tools_render_menu_css %}``

To load the menu tags in your templates: ``{% load admin_menu_tags %}``.
"""

from django import template
from django.urls import reverse

from one.libraries.admin.menu.utils import get_admin_menu
from one.libraries.admin.utils import get_admin_site_name

register = template.Library()
tag_func = register.inclusion_tag("libraries/menu/app_list.html", takes_context=True)


def admin_tools_render_menu(context, menu=None):
    """
    Template tag that renders the menu, it takes an optional ``Menu`` instance
    as unique argument, if not given, the menu will be retrieved with the
    ``get_admin_menu`` function.
    """
    if menu is None:
        menu = get_admin_menu(context)

    menu.init_with_context(context)

    context.update(
        {
            "template": menu.template,
            "menu": menu,
            "admin_url": reverse(f"{get_admin_site_name(context)}:index"),
        }
    )
    return context


admin_tools_render_menu = tag_func(admin_tools_render_menu)


def admin_tools_render_menu_item(context, item, item_template=None):
    """
    Template tag that renders a given menu item, it takes a ``MenuItem``
    instance as unique parameter.
    """
    item.init_with_context(context)

    context.update(
        {
            "template": item.template if item_template is None else item_template,
            "item": item,
            "selected": item.is_selected(context["request"]),
            "fas_icon": item.fas_icon,
            "admin_url": reverse(f"{get_admin_site_name(context)}:index"),
        }
    )
    return context


admin_tools_render_menu_item = tag_func(admin_tools_render_menu_item)


def admin_tools_render_menu_css(context, menu=None):
    """
    Template tag that renders the menu css files,, it takes an optional
    ``Menu`` instance as unique argument, if not given, the menu will be
    retrieved with the ``get_admin_menu`` function.
    """
    if menu is None:
        menu = get_admin_menu(context)

    context.update(
        {
            "template": "libraries/menu/css.html",
            "css_files": menu.Media.css,
        }
    )
    return context


admin_tools_render_menu_css = tag_func(admin_tools_render_menu_css)
