# Generated by Django 4.1.9 on 2023-05-22 16:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("customer", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="CustomerProfile",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "supplier",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="customer.customer",
                        verbose_name="Customer Profile",
                    ),
                ),
            ],
            options={
                "verbose_name": "Customer Profile",
                "verbose_name_plural": "Customer Profiles",
                "db_table": "customer_profile",
            },
        ),
    ]
