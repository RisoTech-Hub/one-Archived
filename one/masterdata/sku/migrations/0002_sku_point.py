# Generated by Django 4.1.8 on 2023-04-30 02:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("sku", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="sku",
            name="point",
            field=models.FloatField(default=1, verbose_name="Point"),
        ),
    ]
