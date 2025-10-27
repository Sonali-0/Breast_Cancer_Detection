from rest_framework import serializers

class PatientDataSerializer(serializers.Serializer):
    age = serializers.CharField()
    menopause = serializers.CharField()
    tumor_size = serializers.CharField()
    inv_nodes = serializers.CharField()
    node_caps = serializers.CharField()
    deg_malig = serializers.CharField()  # keep as string to match training data
    breast = serializers.CharField()
    breast_quad = serializers.CharField()
    irradiation = serializers.CharField()
