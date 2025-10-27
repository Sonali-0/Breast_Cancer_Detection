import joblib
import pandas as pd

# Load model
model = joblib.load("model/breast_cancer_model.pkl")

# Sample patient
sample = {
    "age": "40-49",
    "menopause": "premeno",
    "tumor_size": "25-29",
    "inv_nodes": "0-2",
    "node_caps": "no",
    "deg_malig": "2",
    "breast": "left",
    "breast_quad": "left_low",
    "irradiation": "no"
}

df = pd.DataFrame([sample])

# Predict
pred = model.predict(df)[0]
proba = model.predict_proba(df).max()

print("🧠 Prediction:", "Recurrence" if pred == 1 else "No Recurrence")
print("📊 Confidence:", round(proba, 2))
