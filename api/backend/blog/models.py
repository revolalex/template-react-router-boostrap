from django.db import models

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

    def _str_(self):
        return self.title