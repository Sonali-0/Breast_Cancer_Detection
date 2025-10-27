import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import joblib
import os


url = "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer/breast-cancer.data"

columns = [
    'Class', 'age', 'menopause', 'tumor_size', 'inv_nodes', 'node_caps',
    'deg_malig', 'breast', 'breast_quad', 'irradiation'
]

df = pd.read_csv(url, header=None, names=columns)

print("\n✅ Dataset loaded successfully!")
print("Shape:", df.shape)
print("First 5 rows:\n", df.head())


df.replace('?', pd.NA, inplace=True)
df.dropna(inplace=True)

print("\n✅ Missing values handled. Remaining samples:", len(df))

# Target encoding
df['Class'] = df['Class'].map({'no-recurrence-events': 0, 'recurrence-events': 1})

X = df.drop('Class', axis=1)
y = df['Class']

# =============================
# 3️⃣ Train-Test Split
# =============================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"\n📦 Training samples: {len(X_train)}, Testing samples: {len(X_test)}")

# =============================
# 4️⃣ Define Preprocessor + Model
# =============================
categorical_features = X.columns.tolist()
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ]
)

model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(max_iter=1000))
])

# =============================
# 5️⃣ Train Model
# =============================
model.fit(X_train, y_train)
print("\n✅ Model trained successfully!")

# =============================
# 6️⃣ Evaluate Model
# =============================
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print("\n🎯 Accuracy:", round(acc * 100, 2), "%")
print("\n📊 Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("\n📋 Classification Report:\n", classification_report(y_test, y_pred))

# =============================
# 7️⃣ Save Model
# =============================
os.makedirs("model", exist_ok=True)
joblib.dump(model, "model/breast_cancer_model.pkl")

print("\n💾 Model saved successfully at: model/breast_cancer_model.pkl")
print("\n✅ Training complete.")
