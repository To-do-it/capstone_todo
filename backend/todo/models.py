from tkinter import CASCADE
from django.db import models
from django.conf import settings 
from django.forms import DateTimeField
from django.contrib.auth.models import AbstractUser

class Todo(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='todo', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=200)
    contents = models.TextField()
    deadline = models.DateTimeField()

class TodoUser(AbstractUser):
    def __str__(self):
        return self.email