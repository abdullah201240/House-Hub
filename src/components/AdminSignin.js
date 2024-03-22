import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./CSS/Signin.css";
import { API_BASE_URL } from './config';
const CustomAlert = ({ message, onClose }) => (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
  
export default function AdminSignin() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/AdminLogin`, {
        email,
        password,
      });
    const { data } = response;
    console.log(data);
    

  
    navigate('/adminHome', { state: { data: data } });
} catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setAlertMessage('Login failed. Please check your credentials.');
      setShowAlert(true);
    }
  };
  
  
  
    const closeAlert = () => {
      setShowAlert(false);
    };



  return (
    <div className="main" >
    <div className="navbar">
      <div className="icon">
        <h2 className="logo">House Hub</h2>
      </div>

      
    </div>

  <div className="login-page">
    <div className="form">
      <div className="login-header">
        <h3>ADMIN LOGIN</h3>
        <p>Please enter your credentials to login.</p>
      </div>
      <form onSubmit={handleLoginFormSubmit} style={{ textAlign: 'center' }}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <br/>

        <button type="submit" className="btn">Sign In</button>
        <br/>

        
      </form>
    </div>

    {showAlert && (
      <CustomAlert message={alertMessage} onClose={closeAlert} />
    )}
  </div>
  </div>
);
  
}
