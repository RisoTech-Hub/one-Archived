from django.core.management.base import BaseCommand

from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM
from one.masterdata.uomconversion.models import UOMConversion


class Command(BaseCommand):
    help = "Create UOM Conversion objects"

    def handle(self, *args, **options):
        for sku in SKU.objects.all():
            for uom in UOM.objects.filter(base_uom=sku.base_uom):
                UOMConversion.objects.update_or_create(
                    sku=sku,
                    parent_uom=uom,
                    child_uom=sku.base_uom,
                    defaults={
                        "ratio": 1,
                        "base_uom_ratio": 1
                    }
                )

        self.stdout.write(self.style.SUCCESS("Successfully created UOM Conversion objects."))
