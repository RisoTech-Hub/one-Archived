# Generated by Django 4.1.9 on 2023-05-22 17:10

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("installment", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="installmentline",
            name="description",
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name="Description"),
        ),
    ]
