import React, {  useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';
import { FaHome, FaUser } from 'react-icons/fa';
import '../components/CSS/profile.css';

export default function AdminProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { name, address, phone, email, photo } = state?.data.data || {};
  const imageUrl = `${API_BASE_URL}/${photo}`;

  const navigateTo = (path) => {
    navigate(path, { state: { data: state.data } });
  };

  useEffect(() => {
    if (!state || !state.data || !state.data.data.username) {
      navigate('/adminSignin');
    } 
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <h5>Welcome {name}</h5>
                <li>
                  <a href="/adminHome" onClick={() => navigateTo('/adminHome')}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '20px' }}>
                      <FaHome /> Home
                    </span>
                  </a>
                </li>

                <li>
                  <a href="/adminHouseOwnerList" onClick={() => navigateTo('/adminList')}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '20px' }}>
                      <FaUser /> Admin List
                    </span>
                  </a>
                </li>

                <li>
                  <a href="/adminHouseOwnerList" onClick={() => navigateTo('/adminHouseOwnerList')}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '20px' }}>
                      <FaHome /> House List
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminUserList" onClick={() => navigateTo('/adminUserList')}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '20px' }}>
                      <FaUser /> User List
                    </span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="/adminProfile" onClick={() => navigateTo('/adminProfile')}>
                  <img src={`${imageUrl}`} alt="hugenerd" width="50" height="50" className="rounded-circle" />
                </a>
                <a href="/" style={{ fontSize: '30px',color: 'white' }}>Logout</a>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <br />
            <h1 style={{ textAlign: 'center' }}>Admin Profile </h1>
            <br />
            <br />
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                  <div className="card p-3 py-4">
                    <div className="text-center">
                      <img src={`${imageUrl}`} alt="hugenerd" width="300" className="rounded-circle" />
                    </div>
                    <div className="text-center mt-3">
                      <h1 className="mt-2 mb-0">{name}</h1>
                      <span>Admin</span>
                      <div className="px-4 mt-1">
                        <h3 className="fonts">Address: {address}</h3>
                        <h3 className="fonts">Phone: {phone}</h3>
                        <h3 className="fonts">Email: {email}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
