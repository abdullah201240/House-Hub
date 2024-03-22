import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { API_BASE_URL } from './config';

import './CSS/houseownernavbar.css';

export default function HouseJoin() {
const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const CustomAlert = ({ message, onClose }) => (
        <div className="custom-alert">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      );
      
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate('/signin');
    } else {
      console.log(location.state.data.data);
    }
  }, [location.state, navigate]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Search?query=${searchQuery}`);
      if (Array.isArray(response.data.results)) {
        setSearchResults(response.data.results); 
      } else {
        console.error('Search results are not in the expected format:', response.data);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };
  const handleJoin = async (houseOwner) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Join`, {
        houseOwner,
        userInfo: location.state.data.data 
      });
      console.log('Join request successful:', response.data);
    } catch (error) {
      console.error('Error joining house:', error);
      setAlertMessage('Already has a house, not allowed to join');
      setShowAlert(true);
    }
    
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="/">
          <h1 style={{ color: "white", fontFamily: "Fantasy" }}>HouseHub</h1>
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
              <a className="nav-link" href="/"><h3>Home</h3></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><h3>HouseJoin</h3><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      < h1 style={{textAlign:"center"}}>Search houses using owner email</h1>

      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="search-form">
  <input
    type='text'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="search-input"
  />
  <button type="submit" className="btn btn-primary search-button" style={{borderRadius:30}}>Search</button>
</form>

      <br />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>





            
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{result.name}</td> 
              <td>{result.email}</td> 
              <td>{result.address}</td> 
              <td>{result.phone}</td> 
              <td>
               <a href={`${API_BASE_URL}/${result.addressproof}`}
               ><img src={`${API_BASE_URL}/${result.addressproof}`} alt="Address Proof" width="60" height="60" className="rounded-circle" /></a> 
               </td>
               <td>
               <button type="button" class="btn btn-success" style={{borderRadius:20}} onClick={() => handleJoin(result)}>Join</button>

               </td>


            </tr>
          ))}
        </tbody>
      </table>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={closeAlert} />
      )}
    </div>
  );
}
