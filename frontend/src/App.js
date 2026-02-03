import React, { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Result from './components/Result';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />
      <UploadForm setResult={setResult} />
      <Result result={result} />
    </>
  );
}

export default App;
