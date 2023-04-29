# Generated by Django 4.1.8 on 2023-04-29 08:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("supplier", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="SupplierProfile",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "supplier",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="supplier.supplier",
                        verbose_name="Supplier Profile",
                    ),
                ),
            ],
            options={
                "verbose_name": "Supplier Profile",
                "verbose_name_plural": "Supplier Profiles",
                "db_table": "supplier_profile",
            },
        ),
    ]
