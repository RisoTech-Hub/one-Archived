"""
Module where admin tools menu classes are defined.
"""
from django.utils.translation import gettext_lazy as _

from one.libraries.admin.menu import items


class Menu:
    """
    This is the base class for creating custom navigation menus.
    A menu can have the following properties:

    ``template``
        A string representing the path to template to use to render the menu.
        As for any other template, the path must be relative to one of the
        directories of your ``TEMPLATE_DIRS`` setting.
        Default value: "menu/menu.html".

    ``children``
        A list of children menu items. All children items mus be instances of
        the :class:`~one.libraries.admin.menu.items.MenuItem` class.

    If you want to customize the look of your menu, and it's menu items, you
    can declare css stylesheets and/or javascript files to include when
    rendering the menu, for example::

        from admin_tools.menu import Menu

        class MyMenu(Menu):
            class Media:
                css = {'all': ('css/mymenu.css',)}
                js = ('js/mymenu.js',)

    Here's a concrete example of a custom menu::

        from django.core.urlresolvers import reverse
        from admin_tools.menu import items, Menu

        class MyMenu(Menu):
            def __init__(self, **kwargs):
                super(MyMenu, self).__init__(**kwargs)
                self.children += [
                    items.MenuItem('Home', reverse('admin:index')),
                    items.AppList('Applications'),
                    items.MenuItem('Multi level menu item',
                        children=[
                            items.MenuItem('Child 1', '/foo/'),
                            items.MenuItem('Child 2', '/bar/'),
                        ]
                    ),
                ]

    Below is a screenshot of the resulting menu:

    .. image:: images/menu_example.png
    """

    template = "libraries/menu/menu.html"
    children = None

    class Media:
        css = ()
        js = ()

    def __init__(self, **kwargs):
        for key in kwargs:
            if hasattr(self.__class__, key):
                setattr(self, key, kwargs[key])
        self.children = kwargs.get("children", [])

    def init_with_context(self, context):
        """
        Sometimes you may need to access context or request variables to build
        your menu, this is what the ``init_with_context()`` method is for.
        This method is called just before the display with a
        ``django.template.RequestContext`` as unique argument, so you can
        access to all context variables and to the ``django.http.HttpRequest``.
        """
        pass


class DefaultMenu(Menu):
    """
    The default menu displayed by django-admin-tools.
    """

    def init_with_context(self, context):
        self.children += [
            items.ModelList(_("CMS"), models=("one.cms.*",), is_short=True),
        ]
        if context["request"].user.is_superuser:
            self.children += [
                items.AppList(_("Administration"), exclude=("constance.*",)),
            ]
