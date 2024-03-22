import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import "./CSS/Signin.css";
import { API_BASE_URL } from './config'; 


const CustomAlert = ({ message, onClose }) => (
  <div className="custom-alert">
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

const HouseOwnerSignin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/HouseOwnerLogin`, {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      window.open('/houseOwnerDashboard', '_blank');

    } catch (error) {
      console.error('Error logging in:', error.response.data);
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

        <div className="menu">
        <ul>
            <li><NavLink to="/signin" activeClassName="active">SIGN IN</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active">SIGN UP</NavLink></li>
            <li><NavLink to="/houseOwnerSignup" activeClassName="active">House Owner SIGN UP</NavLink></li>
            <li><NavLink to="/houseOwnerSignin" activeClassName="active">House Owner SIGN IN</NavLink></li>


          </ul>
        </div>
      </div>

    <div className="login-page">
      <div className="form">
        <div className="login-header">
        <br/>
          <br/>
          <h3>House Owner Login</h3>
          <p style={{textAlign:"center"}}>Please enter your credentials to login.</p>
        </div>
        <form onSubmit={handleLoginFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: 'blue' }}
            className="custom-input"
          />
          <br/>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: 'blue' }}
            className="custom-input"
          />
          <br/>
          <br/>
          <br/>

          <button type="submit" className="btn">Sign In</button>
          <br/>
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

export default HouseOwnerSignin;



