import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    age: '',
    menopause: '',
    tumor_size: '',
    inv_nodes: '',
    node_caps: '',
    deg_malig: '',
    breast: '',
    breast_quad: '',
    irradiation: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/predict/",
        formData
      );
      setResult(res.data);
    } catch {
      alert("Prediction failed");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Patient Information</h2>

      <div className="form-grid">
        {Object.keys(formData).map(key => (
          <input
            key={key}
            name={key}
            placeholder={`Enter ${key.replace('_',' ')}`}
            onChange={handleChange}
            required
            className="form-input"
          />
        ))}
      </div>

      <button className="form-button">Predict</button>
    </form>
  );
};

export default UploadForm;
