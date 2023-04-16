from better_json_widget.widgets import BetterJsonWidget
from django.forms import ModelForm
from django.utils.translation import gettext_lazy as _

from one.libraries.eventtracking.models import EventTracking


class EventTrackingAdminForm(ModelForm):
    class Meta:
        model = EventTracking
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        logs = self.instance.logs if self.instance else {}
        model = self.instance.content_type.model_class()
        key_list = list(logs.keys())
        properties = {}
        for key in key_list:
            title = model._meta.get_field(key).verbose_name.title()  # noqa
            properties[key] = {
                "type": "object",
                "title": title,  # noqa
                "description": "'{}' {} '{}' {} '{}'".format(
                    title,
                    _("change value from"),
                    logs[key]["old_value"],
                    _("to"),
                    logs[key]["new_value"],
                ),
            }

        schema = {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "type": "object",
            "properties": properties,
            "required": key_list,
        }
        self.fields["logs"].widget = BetterJsonWidget(schema=schema)
        self.fields["name"].widget = self.fields["code"].widget
