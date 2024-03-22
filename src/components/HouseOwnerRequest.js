import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from './config'; 

import './CSS/houseownernavbar.css';

export default function HouseOwnerRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pendingInfo, setPendingInfo] = useState([]);

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate('/houseOwnerSignin');
    } else {


      fetchData(location.state.data.data.email);
    }
  }, [location.state, navigate]);

  const fetchData = async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/HouseOwnerRequest?query=${query}`);
      setPendingInfo(response.data.pending_info);
    } catch (error) {
      console.error(error);
    }
  };

  const houseOwnerRequest = async () => {
    navigate('/houseOwnerRequest', { state: { data: location.state.data } });
  };

  const houseOwnerDashboard = async () => {
    navigate('/houseOwnerDashboard', { state: { data: location.state.data } });
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
              <a className="nav-link" href="/houseOwnerDashboard" onClick={houseOwnerDashboard}>
                <h3>Home</h3> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/houseOwnerRequest" onClick={houseOwnerRequest}>
                <h3>Request</h3>
              </a>
            </li>
            {/* Other navigation items */}
          </ul>
        </div>
      </nav>
      <br />
      <h1 style={{ textAlign: 'center' }}>All Members Request</h1>
      <br />
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <h4>Name</h4>
              </th>
              <th scope="col">
                <h4>Email</h4>
              </th>
              <th scope="col">
                <h4>Phone</h4>
              </th>
              <th scope="col">
                <h4>Aspect</h4>
              </th>
              <th scope="col">
                <h4>Reject</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {pendingInfo.map((info, index) => (
              <tr key={index}>
                <td>{info.userName}</td>
                <td>{info.userEmail}</td>
                <td>{info.userPhone}</td>
                <td>
                  <button type="button" className="btn btn-success" style={{ borderRadius: 15, backgroundColor: 'green' }}>
                    Aspect
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" style={{ borderRadius: 15, backgroundColor: 'red' }}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
