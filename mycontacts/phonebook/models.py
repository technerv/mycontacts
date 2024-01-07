from django.db import models

# Create your models here.

class ContactList(models.Model):
    name = models.CharField(max_length=200)
    phoneno = models.IntegerField()
    email = models.EmailField(max_length=60)

    def __str__(self):
        return str(self.phoneno)

    # create script to handle the zero number before the phone number.

