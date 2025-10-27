from django.urls import path
from .views import PredictView  # Removed HomeView

urlpatterns = [
    path('predict/', PredictView.as_view(), name='predict'),
]
