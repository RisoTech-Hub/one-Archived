from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, CharField, ForeignKey, PositiveIntegerField, SmallIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel


class Rating(TimeStampedModel, UserStampedModel):
    ONE_STAR_RATING = -2
    TWO_STAR_RATING = -1
    THREE_STAR_RATING = 0
    FOUR_STAR_RATING = 1
    FIVE_STAR_RATING = 2

    RATING_CHOICES = (
        (ONE_STAR_RATING, _("One Star")),
        (TWO_STAR_RATING, _("Two Star")),
        (THREE_STAR_RATING, _("Three Star")),
        (FOUR_STAR_RATING, _("Four Star")),
        (FIVE_STAR_RATING, _("Five Star")),
    )

    BASE_MODEL_ALLOWED = [
        {"app_label": "order", "model": "order"},
        {"app_label": "product", "model": "product"},
    ]

    SECOND_MODEL_ALLOWED = [
        {"app_label": "order", "model": "order"},
        {"app_label": "product", "model": "product"},
    ]

    rating = SmallIntegerField(_("Rating"), choices=RATING_CHOICES, null=True, blank=True)
    comment = CharField(_("Comment"), max_length=2000, null=True, blank=True)

    # rating object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    # rating by
    rated_content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    rated_object_id = PositiveIntegerField()
    rated_object = GenericForeignKey(ct_field="rated_content_type", fk_field="rated_object_id")

    class Meta:
        verbose_name = _("Rating")
        verbose_name_plural = _("Rating")
        db_table = "service_rating"

    def __str__(self):
        return f"{self.content_object} {dict(self.RATING_CHOICES).get(self.rating)}"
