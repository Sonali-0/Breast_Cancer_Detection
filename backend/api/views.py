# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .serializers import PatientDataSerializer
# import joblib
# import os
# from django.conf import settings
# import pandas as pd

# class PredictView(APIView):
#     def post(self, request):
#         # Validate input
#         serializer = PatientDataSerializer(data=request.data)
#         if not serializer.is_valid():
#             return Response({'error': 'Invalid input', 'details': serializer.errors}, status=400)

#         try:
#             # Load trained model pipeline
#             model_path = os.path.join(settings.BASE_DIR, 'model', 'breast_cancer_model.pkl')
#             if not os.path.exists(model_path):
#                 return Response({'error': 'Model file not found. Please train the model first.'}, status=500)

#             model = joblib.load(model_path)

#             # Convert validated data to DataFrame
#             data = {key: str(value) for key, value in serializer.validated_data.items()}
#             df = pd.DataFrame([data])

#             # Predict
#             pred = model.predict(df)[0]                 
#             proba = model.predict_proba(df).max()       

#             # Human-readable message
#             if pred == 1:
#                 message = f"The chance of cancer recurrence is {round(proba * 100, 2)}%."
#             else:
#                 message = f"The chance of cancer recurrence is low ({round(proba * 100, 2)}%)."

#             return Response({
#                 'prediction': message,
#                 'confidence': round(proba, 2)
#             })

#         except Exception as e:
#             return Response({'error': str(e)}, status=500)

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
            # --- FIX 1: Ensure correct model path ---
            model_dir = os.path.join(settings.BASE_DIR, 'model')
            model_path = os.path.join(model_dir, 'breast_cancer_model.pkl')

            if not os.path.exists(model_path):
                return Response(
                    {'error': f'Model file not found at {model_path}'},
                    status=500
                )

            # Load model
            model = joblib.load(model_path)

            # --- FIX 2: DataFrame format ---
            data = {key: [value] for key, value in serializer.validated_data.items()}
            df = pd.DataFrame(data)

            # --- FIX 3: Predict safely ---
            pred = model.predict(df)[0]
            proba = model.predict_proba(df).max()

            # --- FIX 4: Human readable message ---
            if pred == 1:
                message = f"The chance of cancer recurrence is {round(proba * 100, 2)}%."
            else:
                message = f"The chance of cancer recurrence is low ({round(proba * 100, 2)}%)."

            return Response({
                'prediction': message,
                'confidence': round(float(proba), 2)
            })

        except Exception as e:
            return Response({'error': f'Server Error: {str(e)}'}, status=500)

