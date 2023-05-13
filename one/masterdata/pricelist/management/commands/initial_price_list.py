from django.core.management.base import BaseCommand

from one.masterdata.level.models import Level
from one.masterdata.pricelist.models import PriceList
from one.masterdata.sku.models import SKU


class Command(BaseCommand):
    help = "Create Price List objects"

    def handle(self, *args, **options):
        for item in Level.objects.all():
            price = PriceList.objects.update_or_create(
                code=f"BASE_PRICE_{item.code.split('_')[-1]}", name=f"Base Price for {item.name}", level=item
            )
            for sku in SKU.objects.all():
                price[0].price_line.update_or_create(sku=sku, base_price=[0.0, 0.0])
        self.stdout.write(self.style.SUCCESS("Successfully created Price List objects."))
