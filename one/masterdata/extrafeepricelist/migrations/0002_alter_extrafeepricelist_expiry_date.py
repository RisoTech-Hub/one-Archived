# Generated by Django 4.1.8 on 2023-05-21 10:07

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("extrafeepricelist", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="extrafeepricelist",
            name="expiry_date",
            field=models.DateField(blank=True, null=True, verbose_name="Expiry Date"),
        ),
    ]