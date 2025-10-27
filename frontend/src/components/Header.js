import React from 'react';

const headerStyle = {
  background: 'linear-gradient(90deg, #1e40af, #3b82f6)',
  color: 'white',
  textAlign: 'center',
  padding: '40px 20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  margin: 0,
  opacity: 0.9,
};

const Header = () => (
  <header style={headerStyle}>
    <h1 style={titleStyle}>Breast Cancer Detection</h1>
    <p style={subtitleStyle}>Predict the chance of recurrence using patient data</p>
  </header>
);

export default Header;
