import React, { useState } from "react";
import axios from "axios";

// Use your Render backend URL
const API_URL =
  "https://breast-cancer-detection-2-4oyg.onrender.com/api/predict/";

const UploadForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    age: "",
    menopause: "",       // "Yes" or "No"
    tumor_size: "",
    inv_nodes: "",
    node_caps: "",       // "Yes" or "No"
    deg_malig: "",
    breast: "",          // "Left" or "Right"
    breast_quad: "",     // e.g., "Upper-Outer"
    irradiation: ""      // "Yes" or "No"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only convert numeric fields to numbers
    const payload = {
      age: Number(formData.age),
      tumor_size: Number(formData.tumor_size),
      inv_nodes: Number(formData.inv_nodes),
      deg_malig: Number(formData.deg_malig),
      // Keep all string fields as-is
      menopause: formData.menopause,
      node_caps: formData.node_caps,
      breast: formData.breast,
      breast_quad: formData.breast_quad,
      irradiation: formData.irradiation
    };

    try {
      const res = await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      setResult(res.data);
    } catch (err) {
      console.error("API ERROR:", err.response?.data || err.message);
      alert("Prediction failed. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "20px auto", padding: 10 }}>
      <h2>Patient Information</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: 12
      }}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.replace("_", " ")}
            required
            style={{ padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
          />
        ))}
      </div>

      <button type="submit" style={{
        marginTop: 20,
        padding: "10px 20px",
        borderRadius: 5,
        border: "none",
        backgroundColor: "#3b82f6",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Predict
      </button>
    </form>
  );
};

export default UploadForm;
