// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadForm = ({ setResult }) => {
//   const [formData, setFormData] = useState({
//     age: '',
//     menopause: '',
//     tumor_size: '',
//     inv_nodes: '',
//     node_caps: '',
//     deg_malig: '',
//     breast: '',
//     breast_quad: '',
//     irradiation: ''
//   });

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();

//     // Simple validation
//     for (let key in formData) {
//       if (formData[key].trim() === '') {
//         alert(`Please fill in ${key.replace('_', ' ')}`);
//         return;
//       }
//     }

//     try {
//       const res = await axios.post("http://127.0.0.1:8000/api/predict/", formData);
//       setResult(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('Prediction failed. Please check backend.');
//     }
//   };

//   return (
//     <form className="form-container" onSubmit={handleSubmit}>
//       <h2 className="form-title">Patient Information</h2>
//       <div className="form-grid">
//         {Object.entries(formData).map(([key, value]) => (
//           <div key={key} className="form-row">
//             <label htmlFor={key} className="form-label">
//               {key.replace('_', ' ')}:
//             </label>
//             <input
//               id={key}
//               name={key}
//               value={value}
//               onChange={handleChange}
//               className="form-input"
//               placeholder={`Enter ${key.replace('_', ' ')}`}
//               required
//             />
//           </div>
//         ))}
//       </div>
//       <div className="form-button-container">
//         <button type="submit" className="form-button">Predict</button>
//       </div>
//     </form>
//   );
// };

// export default UploadForm;

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

    // Validate inputs
    for (let key in formData) {
      if (formData[key].trim() === '') {
        alert(`Please fill in ${key.replace('_', ' ')}`);
        return;
      }
    }

    try {
      // ✅ Use your deployed backend URL directly
      const res = await axios.post(
        "https://breast-cancer-detection-1-3i4b.onrender.com/api/predict/",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.error("Error during prediction:", err.response?.data || err.message);
      alert("Prediction failed. Please check backend or try again.");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Patient Information</h2>
      <div className="form-grid">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-row">
            <label htmlFor={key} className="form-label">
              {key.replace('_', ' ')}:
            </label>
            <input
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              className="form-input"
              placeholder={`Enter ${key.replace('_', ' ')}`}
              required
            />
          </div>
        ))}
      </div>
      <div className="form-button-container">
        <button type="submit" className="form-button">Predict</button>
      </div>
    </form>
  );
};

export default UploadForm;

