from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import TodoUserChangeForm, TodoUserCreationForm
from .models import TodoUser
from .models import Todo

class UseUserAdmin(UserAdmin):
    add_form = TodoUserCreationForm
    form = TodoUserChangeForm
    model = TodoUser
    list_display =  ['email']

admin.site.register(Todo)