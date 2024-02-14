import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './CSS/Signup.css';

export default function HouseOwnerSignup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [addressProof, setAddressProof] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('address', address);
      formData.append('addressproof', addressProof);
      const response = await axios.post('http://192.168.0.107:8080/HouseOwnerSignup', formData);

      console.log(response.data);

      navigate('/houseOwnerSignin');
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
            <li><NavLink to="/houseOwnerSignin" activeClassName="active">SIGN IN</NavLink></li>
            <li><NavLink to="/houseOwnerSignup" activeClassName="active">SIGN UP</NavLink></li>
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
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input type="file" accept="image/*" onChange={(e) => setAddressProof(e.target.files[0])} />
            <br/> <br/>
            <button className='btn1' type="submit">Sign Up</button>
            <br/> <br/>
            <h6 className="message">
              Have an account?
              <br/> <br/>
              <NavLink to="/houseOwnerSignin" activeClassName="active" className='btn'>Sign In</NavLink>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
}
