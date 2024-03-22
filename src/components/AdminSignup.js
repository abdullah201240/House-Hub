import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';
import { FaHome, FaUser } from 'react-icons/fa';
import "./CSS/addAdmin.css";

export default function AdminSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const photo = location.state?.data?.data?.photo;
  const imageUrl = `${API_BASE_URL}/${photo}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('photo', formData.photo);

      const response = await fetch('http://192.168.0.113:8080/AdminSignup', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${errorMessage}`);
      }

      navigate('/adminList', { state: { data: state.data } });
    } catch (error) {
      console.error('Error:', error);
      // Handle error gracefully, show error message to the user
      // Example: set an error state to display a message on the UI
    }
  };

  const adminHouseOwnerList = () => {
    navigate('/adminHouseOwnerList', { state: { data: state.data } });
  };

  const adminUserList = () => {
    navigate('/adminUserList', { state: { data: state.data } });
  };

  const adminList = () => {
    navigate('/adminList', { state: { data: state.data } });
  };

  const adminProfile = () => {
    navigate('/adminProfile', { state: { data: state.data } });
  };

  const adminHome = () => {
    navigate('/adminHome', { state: { data: state.data } });
  };

  useEffect(() => {
    if (!location.state || !location.state.data || !location.state.data.data || !location.state.data.data.username) {
      navigate('/adminSignin');
    }
  }, [location.state, navigate]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <h5>Welcome {location.state?.data?.data?.name}</h5>
                <li>
                  <a href="/adminHome" onClick={adminHome}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}>
                      <FaHome /> Home
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminHouseOwnerList" onClick={adminList}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}>
                      <FaUser /> Admin List
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminHouseOwnerList" onClick={adminHouseOwnerList}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}>
                      <FaHome /> House List
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/adminUserList" onClick={adminUserList}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}>
                      <FaUser /> User List
                    </span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="/adminProfile" onClick={adminProfile}>
                  <img src={`${imageUrl}`} alt="hugenerd" width="50" height="50" className="rounded-circle" />
                </a>
                <a href="/" style={{ fontSize: '30px', color: 'white' }}>Logout</a>
              </div>
            </div>
          </div>
          <div className="col py-3" style={{textAlign:"center"}}>
            <div className="form-body">
              <div className="row">
                <div className="form-holder">
                  <div className="form-content">
                    <div className="form-items">
                      <h3>Add Admin</h3>
                      <p>Fill in the data below.</p>
                      <form onSubmit={handleSubmit} className="requires-validation" noValidate>
                        <div className="col-md-12">
                          <input className="form-control" type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                          <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                          <input className="form-control" type="text" name="address" placeholder="Address" required onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                          <input className="form-control" type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                          <p>Photo</p>
                          <input className="form-control" type="file" required onChange={handlePhotoChange} />
                        </div>
                        <div className="col-md-12">
                          <input className="form-control" type="password" name="password" placeholder="password" required onChange={handleChange} />
                        </div>
                        <div className="form-button mt-3">
                          <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                      </form>
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
