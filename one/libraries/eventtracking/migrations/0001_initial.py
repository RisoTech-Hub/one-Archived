# Generated by Django 4.1.8 on 2023-04-16 05:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("contenttypes", "0002_remove_content_type_name"),
    ]

    operations = [
        migrations.CreateModel(
            name="EventTracking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                (
                    "status",
                    model_utils.fields.StatusField(
                        choices=[("STARTED", "Started"), ("FINISHED", "Finished")],
                        default="STARTED",
                        max_length=100,
                        no_check_for_status=True,
                        verbose_name="status",
                    ),
                ),
                (
                    "status_changed",
                    model_utils.fields.MonitorField(
                        default=django.utils.timezone.now,
                        monitor="status",
                        verbose_name="status changed",
                    ),
                ),
                ("code", models.CharField(max_length=255, verbose_name="Event Code")),
                ("name", models.TextField(verbose_name="Event Name")),
                (
                    "ip",
                    models.CharField(
                        blank=True, max_length=48, null=True, verbose_name="Request IP"
                    ),
                ),
                (
                    "logs",
                    models.JSONField(
                        blank=True, default=list, null=True, verbose_name="Event Logs"
                    ),
                ),
                (
                    "root_code",
                    models.CharField(
                        blank=True,
                        max_length=64,
                        null=True,
                        verbose_name="Parent Event Code",
                    ),
                ),
                ("object_id", models.PositiveIntegerField(blank=True, null=True)),
                (
                    "content_type",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="contenttypes.contenttype",
                    ),
                ),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="event_children",
                        to="eventtracking.eventtracking",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Event Tracking",
                "verbose_name_plural": "Event Tracking",
                "db_table": "logging_event_tracking",
            },
        ),
    ]
