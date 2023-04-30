# Generated by Django 4.1.8 on 2023-04-29 01:28

from django.db import migrations
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0002_user_first_name_user_last_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="account_type",
            field=model_utils.fields.StatusField(
                choices=[("PROVIDER", "Platform Provider"), ("SUPPLIER", "Supplier"), ("CUSTOMER", "Customer")],
                default="PROVIDER",
                max_length=100,
                no_check_for_status=True,
                verbose_name="Account Type",
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="status",
            field=model_utils.fields.StatusField(
                choices=[("ONLINE", "Online"), ("OFFLINE", "Offline")],
                default="ONLINE",
                max_length=100,
                no_check_for_status=True,
                verbose_name="status",
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="status_changed",
            field=model_utils.fields.MonitorField(
                default=django.utils.timezone.now, monitor="status", verbose_name="status changed"
            ),
        ),
    ]