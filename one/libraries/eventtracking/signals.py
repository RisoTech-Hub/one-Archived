from django.contrib.auth import get_user_model
from django.db.models.signals import post_delete, post_save, pre_save
from django.dispatch import receiver

from one.libraries.eventtracking.decorators import (
    model_event_post_delete_tracking,
    model_event_post_save_tracking,
    model_event_pre_save_tracking,
)

User = get_user_model()


@receiver(pre_save, sender=None)
@model_event_pre_save_tracking()
def event_pre_save(sender, **kwargs):
    pass


@receiver(post_save, sender=None)
@model_event_post_save_tracking()
def event_post_save(sender, **kwargs):
    pass


@receiver(post_delete, sender=None)
@model_event_post_delete_tracking()
def event_post_delete(sender, **kwargs):
    pass
