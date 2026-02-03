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
        headers: { "Content-Type": "application/json" } // no withCredentials
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

      <div className="form-grid">

  {Object.keys(formData).map((key, index) => (
    
    <div className="form-field" key={key}>
      <label>{key.replace("_", " ")}:</label>
      <input
        name={key}
        value={formData[key]}
        onChange={handleChange}
        placeholder={`Enter ${key.replace("_", " ")}`}
        required
      />
    </div>
  ))}

</div>

      <button type="submit">
        Predict
      </button>
    </form>
  );
};

export default UploadForm;
