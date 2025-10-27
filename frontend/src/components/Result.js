import React from 'react';

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-container">
      <p><strong>Prediction:</strong> {result.prediction}</p>
      <p><strong>Confidence:</strong> {Math.round(result.confidence * 100)}%</p>
    </div>
  );
};

export default Result;
