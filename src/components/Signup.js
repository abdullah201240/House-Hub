import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './CSS/Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.0.107:8080/signup', {
        name,
        phone,
        email,
        password,
      });

      console.log(response.data);

      // Redirect to login page after successful signup
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="main">

<div className="navbar">
        <div className="icon">
          <h2 className="logo">House Hub</h2>
        </div>

        <div className="menu">
          <ul>
            <li><NavLink to="/signin" activeClassName="active">SIGN IN</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active">SIGN UP</NavLink></li>
          </ul>
        </div>
      </div>
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>Sign Up</h3>
            <p>Please enter your credentials to Sign Up.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br/> <br/>
          <button className='btn1' type="submit">Sign Up</button>
          <br/> <br/>
          <h6 className="message">
            Have an account?
            <br/> <br/>
            <NavLink to="/signin" activeClassName="active" className='btn'>Sign In</NavLink>
          </h6>
        </form>
      </div>
    </div>
    </div>
  );
}
