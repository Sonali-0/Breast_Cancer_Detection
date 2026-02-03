from django.db import models

class Patient(models.Model):
    age = models.IntegerField()
    menopause = models.CharField(max_length=20)
    tumor_size = models.IntegerField()
    inv_nodes = models.IntegerField()
    node_caps = models.CharField(max_length=10)
    deg_malig = models.IntegerField()
    breast = models.CharField(max_length=10)
    breast_quad = models.CharField(max_length=20)
    irradiation = models.CharField(max_length=10)

    prediction = models.CharField(max_length=20)
    confidence = models.FloatField()

    def __str__(self):
        return self.prediction
