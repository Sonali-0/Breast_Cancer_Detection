from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PatientDataSerializer
import joblib
import os
from django.conf import settings
import pandas as pd

class PredictView(APIView):
    def post(self, request):
        # Validate input
        serializer = PatientDataSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({'error': 'Invalid input', 'details': serializer.errors}, status=400)

        try:
            # Load trained model pipeline
            model_path = os.path.join(settings.BASE_DIR, 'model', 'breast_cancer_model.pkl')
            if not os.path.exists(model_path):
                return Response({'error': 'Model file not found. Please train the model first.'}, status=500)

            model = joblib.load(model_path)

            # Convert validated data to DataFrame
            data = {key: str(value) for key, value in serializer.validated_data.items()}
            df = pd.DataFrame([data])

            # Predict
            pred = model.predict(df)[0]                 
            proba = model.predict_proba(df).max()       

            # Human-readable message
            if pred == 1:
                message = f"The chance of cancer recurrence is {round(proba * 100, 2)}%."
            else:
                message = f"The chance of cancer recurrence is low ({round(proba * 100, 2)}%)."

            return Response({
                'prediction': message,
                'confidence': round(proba, 2)
            })

        except Exception as e:
            return Response({'error': str(e)}, status=500)
