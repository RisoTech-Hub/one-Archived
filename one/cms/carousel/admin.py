from django.contrib import admin

from .models import Carousel, CarouselItem


# CarouselItem tabular inline
class CarouselItemInline(admin.TabularInline):
    model = CarouselItem
    extra = 0


@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "start", "end")
    list_filter = ("start", "end")
    search_fields = ("name", "description")
    inlines = [CarouselItemInline]
