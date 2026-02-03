// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const UploadForm = ({ setResult }) => {
// // //   const [formData, setFormData] = useState({
// // //     age: '',
// // //     menopause: '',
// // //     tumor_size: '',
// // //     inv_nodes: '',
// // //     node_caps: '',
// // //     deg_malig: '',
// // //     breast: '',
// // //     breast_quad: '',
// // //     irradiation: ''
// // //   });

// // //   const handleChange = e => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async e => {
// // //     e.preventDefault();

// // //     try {
// // //       const res = await axios.post(
// // //         "http://127.0.0.1:8000/api/predict/",
// // //         formData
// // //       );
// // //       setResult(res.data);
// // //     } catch {
// // //       alert("Prediction failed");
// // //     }
// // //   };

// // //   return (
// // //     <form className="form-container" onSubmit={handleSubmit}>
// // //       <h2>Patient Information</h2>

// // //       <div className="form-grid">
// // //         {Object.keys(formData).map(key => (
// // //           <input
// // //             key={key}
// // //             name={key}
// // //             placeholder={`Enter ${key.replace('_',' ')}`}
// // //             onChange={handleChange}
// // //             required
// // //             className="form-input"
// // //           />
// // //         ))}
// // //       </div>

// // //       <button className="form-button">Predict</button>
// // //     </form>
// // //   );
// // // };

// // // export default UploadForm;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const UploadForm = ({ setResult }) => {
// //   const [formData, setFormData] = useState({
// //     age: '',
// //     menopause: '',
// //     tumor_size: '',
// //     inv_nodes: '',
// //     node_caps: '',
// //     deg_malig: '',
// //     breast: '',
// //     breast_quad: '',
// //     irradiation: ''
// //   });

// //   const handleChange = e => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();

// //     try {
// //       // Convert numeric fields to numbers
// //       const payload = {
// //         ...formData,
// //         age: Number(formData.age),
// //         tumor_size: Number(formData.tumor_size),
// //         inv_nodes: Number(formData.inv_nodes),
// //         deg_malig: Number(formData.deg_malig)
// //       };

// //       // const res = await axios.post(
// //       //   "http://127.0.0.1:8000/api/predict/",
// //       //   payload,
// //       //   {
// //       //     headers: { "Content-Type": "application/json" }
// //       //   }
// //       // );
// //       const res = await axios.post(
// //         "http://localhost:8000/api/predict/",
// //         formData,
// //         { headers: { "Content-Type": "application/json" } }
// //       );
      
// //       setResult(res.data);
// //     } catch (err) {
// //       console.error("Prediction error:", err.response?.data || err.message);
// //       alert("Prediction failed. Check console for details.");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '20px auto' }}>
// //       <h2>Patient Information</h2>

// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// //         gap: '15px',
// //         marginTop: '15px'
// //       }}>
// //         {Object.keys(formData).map(key => (
// //           <input
// //             key={key}
// //             name={key}
// //             placeholder={`Enter ${key.replace('_', ' ')}`}
// //             value={formData[key]}
// //             onChange={handleChange}
// //             required
// //             style={{
// //               padding: '10px',
// //               borderRadius: '5px',
// //               border: '1px solid #ccc'
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <button type="submit" style={{
// //         marginTop: '20px',
// //         padding: '10px 20px',
// //         borderRadius: '5px',
// //         border: 'none',
// //         backgroundColor: '#3b82f6',
// //         color: 'white',
// //         fontWeight: 'bold',
// //         cursor: 'pointer'
// //       }}>
// //         Predict
// //       </button>
// //     </form>
// //   );
// // };

// // export default UploadForm;

// import React, { useState } from "react";
// import axios from "axios";

// const API_URL =
//   "https://breast-cancer-detection-2-4oyg.onrender.com/api/predict/";

// const UploadForm = ({ setResult }) => {
//   const [formData, setFormData] = useState({
//     age: "",
//     menopause: "",
//     tumor_size: "",
//     inv_nodes: "",
//     node_caps: "",
//     deg_malig: "",
//     breast: "",
//     breast_quad: "",
//     irradiation: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Convert numeric fields
//     const payload = {
//       ...formData,
//       age: Number(formData.age),
//       tumor_size: Number(formData.tumor_size),
//       inv_nodes: Number(formData.inv_nodes),
//       deg_malig: Number(formData.deg_malig)
//     };

//     try {
//       const res = await axios.post(API_URL, payload, {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       setResult(res.data);
//     } catch (err) {
//       console.error("API ERROR:", err.response?.data || err.message);
//       alert("Prediction failed. Check console.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "auto" }}>
//       <h2>Patient Information</h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
//           gap: 12
//         }}
//       >
//         {Object.keys(formData).map((key) => (
//           <input
//             key={key}
//             name={key}
//             value={formData[key]}
//             onChange={handleChange}
//             placeholder={key.replace("_", " ")}
//             required
//           />
//         ))}
//       </div>

//       <button type="submit" style={{ marginTop: 20 }}>
//         Predict
//       </button>
//     </form>
//   );
// };

// export default UploadForm;

import React, { useState } from "react";
import axios from "axios";

// ✅ Use your Render backend URL here
const API_URL =
  "https://breast-cancer-detection-2-4oyg.onrender.com/api/predict/";

const UploadForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    age: "",
    menopause: "",
    tumor_size: "",
    inv_nodes: "",
    node_caps: "",
    deg_malig: "",
    breast: "",
    breast_quad: "",
    irradiation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert numeric fields to numbers
    const payload = {
      ...formData,
      age: Number(formData.age),
      tumor_size: Number(formData.tumor_size),
      inv_nodes: Number(formData.inv_nodes),
      deg_malig: Number(formData.deg_malig)
    };

    try {
      const res = await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true  // needed if using CORS_ALLOW_CREDENTIALS
      });
      setResult(res.data);
    } catch (err) {
      console.error("API ERROR:", err.response?.data || err.message);
      alert("Prediction failed. Check console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 700, margin: "20px auto", padding: 10 }}
    >
      <h2>Patient Information</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: 12
        }}
      >
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

      <button
        type="submit"
        style={{
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 5,
          border: "none",
          backgroundColor: "#3b82f6",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Predict
      </button>
    </form>
  );
};

export default UploadForm;
