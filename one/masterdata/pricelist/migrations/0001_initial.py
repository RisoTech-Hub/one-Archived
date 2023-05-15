# Generated by Django 4.1.8 on 2023-05-15 17:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("sku", "0003_alter_sku_markup"),
        ("level", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("uom", "0002_uom_base_uom"),
    ]

    operations = [
        migrations.CreateModel(
            name="PriceList",
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
                    "level",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="price_list",
                        to="level.level",
                        verbose_name="Supplier Level",
                    ),
                ),
            ],
            options={
                "verbose_name": "Price List",
                "verbose_name_plural": "Price List",
                "db_table": "master_data_price_list",
            },
        ),
        migrations.CreateModel(
            name="PriceLine",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("price", models.DecimalField(decimal_places=2, default=0.0, max_digits=20, verbose_name="Price")),
                (
                    "price_list",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="price_line",
                        to="pricelist.pricelist",
                        verbose_name="Price List",
                    ),
                ),
                (
                    "sku",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="price_line",
                        to="sku.sku",
                        verbose_name="SKU",
                    ),
                ),
                (
                    "uom",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="price_line",
                        to="uom.uom",
                        verbose_name="UOM",
                    ),
                ),
            ],
            options={
                "verbose_name": "Price Line",
                "verbose_name_plural": "Price Line",
                "db_table": "master_data_price_line",
            },
        ),
    ]
