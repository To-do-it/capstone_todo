from rest_framework import serializers
from .models import Todo, TodoUser

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoUser
        fields = ('email','last_login', 'date_joined', 'is_staff')