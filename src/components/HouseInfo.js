import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { API_BASE_URL } from './config';

import './CSS/houseownernavbar.css';

export default function HouseInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [houseInformation, setHouseInformation] = useState([]);
  
  useEffect(() => {
    const fetchHouseInfo = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/HouseInfo`, {

          userEmail: location.state.data.data.email,
        });
        setHouseInformation(response.data);
      } catch (error) {
        console.error('Error fetching house info:', error);
      }
    };

    if (!location.state || !location.state.data) {
      navigate('/signin');
    } else {
      fetchHouseInfo();
    }
  }, [location.state, navigate]);

  const houseJoin = () => {
    navigate('/houseJoin', { state: { data: location.state.data } });
  };

  const houseInfo = () => {
    navigate('/houseInfo', { state: { data: location.state.data } });
  };
  const dashboard = async () => {
    navigate('/dashboard', { state: { data: location.state.data } });
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="/">
          <h1 style={{ color: 'white', fontFamily: 'Fantasy' }}>HouseHub</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: 300 }}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/dashboard" onClick={dashboard}>
                <h3>Home</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/houseJoin" onClick={houseJoin}>
                <h3>HouseJoin</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/houseInfo" onClick={houseInfo}>
                <h3>HouseInfo</h3>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <h1 style={{ textAlign: 'center' }}>Your House Information</h1>
      <br />
      <table className="table">
      <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Photo</th>
            <th scope="col">Status</th>





            
          </tr>
        </thead>

        <tbody>
          {Array.isArray(houseInformation) && houseInformation.map((house, index) => (
            <tr key={index}>
              <td>{house.houseOwnerName}</td>
              <td>{house.houseOwnerEmail}</td>
              <td>{house.houseOwnerAddress}</td>
              <td>
              <img src={`${API_BASE_URL}/${house.housePhoto}`} alt="House"  width="60" height="60" className="rounded-circle"/>
              </td>
              <td>
              <span className={`badge badge-${house.status === 'Accepted' ? 'success' : 'danger'} rounded-pill d-inline`}>

                
                {house.status} </span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
