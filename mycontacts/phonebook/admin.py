from django.contrib import admin

from .models import ContactList

class ContactListAdmin(admin.ModelAdmin):
    list_display = ("name", "phoneno", "email")

# Register your models here.
admin.site.register(ContactList, ContactListAdmin)