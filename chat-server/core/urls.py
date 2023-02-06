# core/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('chat.urls')),  # new
    path('admin/', admin.site.urls),
]