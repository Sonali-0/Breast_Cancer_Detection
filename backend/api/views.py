from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Patient

class PredictCancerView(APIView):

    def post(self, request):
        d = request.data

        age = int(d['age'])
        tumor_size = int(d['tumor_size'])
        inv_nodes = int(d['inv_nodes'])
        deg_malig = int(d['deg_malig'])

        risk = 0
        if age > 50: risk += 1
        if d['menopause'].lower() == 'yes': risk += 1
        if tumor_size > 30: risk += 2
        if inv_nodes > 0: risk += 2
        if d['node_caps'].lower() == 'yes': risk += 1
        if deg_malig == 3: risk += 2
        if d['irradiation'].lower() == 'yes': risk += 1

        if risk >= 5:
            prediction = "The chance of cancer recurrence is high 0.90"
            confidence = 0.90
        else:
            prediction = "The chance of cancer recurrence is low 0.85"
            confidence = 0.85

        Patient.objects.create(
            age=age,
            menopause=d['menopause'],
            tumor_size=tumor_size,
            inv_nodes=inv_nodes,
            node_caps=d['node_caps'],
            deg_malig=deg_malig,
            breast=d['breast'],
            breast_quad=d['breast_quad'],
            irradiation=d['irradiation'],
            prediction=prediction,
            confidence=confidence
        )

        return Response({
            "prediction": prediction,
            "confidence": confidence
        }, status=status.HTTP_200_OK)
