from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import TodoUser

class TodoUserCreationForm(UserCreationForm):
    class Meta:
        model = TodoUser
        fields = ('email', )
class TodoUserChangeForm(UserChangeForm):
    class Meta:
        model = TodoUser
        fields = UserChangeForm.Meta.fields