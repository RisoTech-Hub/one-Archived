# Generated by Django 4.1.9 on 2023-05-25 06:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("workflowstep", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("workflow", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="TransitionCondition",
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
            ],
            options={
                "verbose_name": "Transition Condition",
                "verbose_name_plural": "Transition Conditions",
                "db_table": "workflow_transition_condition",
            },
        ),
        migrations.CreateModel(
            name="TransitionConditionMapping",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("is_required", models.BooleanField(default=False)),
                (
                    "condition",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="workflowtransition.transitioncondition"
                    ),
                ),
            ],
            options={
                "verbose_name": "Transition Condition Mapping",
                "verbose_name_plural": "Transition Condition Mappings",
                "db_table": "workflow_transition_condition_mapping",
            },
        ),
        migrations.CreateModel(
            name="WorkflowTransition",
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
                    "conditions",
                    models.ManyToManyField(
                        through="workflowtransition.TransitionConditionMapping",
                        to="workflowtransition.transitioncondition",
                    ),
                ),
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
                    "from_step",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="transitions_from",
                        to="workflowstep.workflowstep",
                        verbose_name="From Step",
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
                    "to_step",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="transitions_to",
                        to="workflowstep.workflowstep",
                        verbose_name="To Step",
                    ),
                ),
                (
                    "workflow",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="workflow.workflow", verbose_name="Workflow"
                    ),
                ),
            ],
            options={
                "verbose_name": "Workflow Transition",
                "verbose_name_plural": "Workflow Transitions",
                "db_table": "workflow_transition",
            },
        ),
        migrations.AddField(
            model_name="transitionconditionmapping",
            name="transition",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="workflowtransition.workflowtransition"
            ),
        ),
    ]
