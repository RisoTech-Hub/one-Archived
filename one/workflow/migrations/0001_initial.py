# Generated by Django 4.1.9 on 2023-05-23 17:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("contenttypes", "0002_remove_content_type_name"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Workflow",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="created"
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="modified"
                    ),
                ),
                ("code", models.CharField(max_length=100, unique=True, verbose_name="Unique Code")),
                ("is_active", models.BooleanField(default=True, verbose_name="Is Active")),
                ("name", models.CharField(max_length=100, verbose_name="Name")),
                ("description", models.CharField(blank=True, max_length=255, null=True, verbose_name="Description")),
                (
                    "creator",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="%(app_label)s_%(class)s_creator",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Created by",
                    ),
                ),
                (
                    "last_modified_by",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="%(app_label)s_%(class)s_last_modified_by",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Last modified by",
                    ),
                ),
                (
                    "triggered_by",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="contenttypes.contenttype"),
                ),
            ],
            options={
                "verbose_name": "Workflow",
                "verbose_name_plural": "Workflows",
                "db_table": "workflow_workflow",
            },
        ),
    ]
