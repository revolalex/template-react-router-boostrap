from django.db import models
from django.conf import settings

import datetime
# Create your models here.


class Blog(models.Model):

    STACK_CHOICES = [
        ('Front', 'Front'),
        ('Back', 'Back')
    ]
    stack = models.CharField(
        max_length=5,
        choices=STACK_CHOICES ,
        default='Front',
    )

    title = models.CharField(max_length=120)
    categories = models.CharField(max_length=120)
    date = models.DateField(default=datetime.date.today)
    text = models.TextField()
    # FIXME add a foreign key author in back ends
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    # posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)

    def _str_(self):
        return self.title