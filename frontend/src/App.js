import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import Header from './components/Header';
import Result from './components/Result';
import './App.css'; // Custom CSS for layout

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="app-container">
       <Header/>
      <div className="form-result-container">
        <UploadForm setResult={setResult} />
        <Result result={result} />
      </div>
    </div>
  );
};

export default App;
