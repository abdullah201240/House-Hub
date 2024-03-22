import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';
import { FaHome, FaUser } from 'react-icons/fa';

export default function AdminHouseOwnerList() {
  const [houseOwners, setHouseOwners] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location; 
  const photo = location.state.data.data.photo;
const imageUrl = `${API_BASE_URL}/${photo}`;

  const adminHome = async () => {
    navigate('/adminHome', { state: { data: state.data } });
  };
  const adminHouseOwnerList = async () => {
    navigate('/adminHouseOwnerList', { state: { data: state.data } });
  };
  const adminUserList = async () => {
    navigate('/adminUserList', { state: { data: state.data } });
  };
  
  const adminList = async () => {
    navigate('/adminList', { state: { data: state.data } });
  };
  useEffect(() => {
    
    if (!location.state || !location.state.data || !location.state.data.data || !location.state.data.data.username) {
      navigate('/adminSignin');
    } 
    else{

    fetch(`${API_BASE_URL}/houseList`)
      .then((response) => response.json())
      .then((data) => setHouseOwners(data))
      .catch((error) => console.error('Error fetching data:', error));
    }
  }, [location.state, navigate]);
  return (

      
      <div div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <h5>Welcome {location.state.data.data.name}</h5>
                <li>
                  <a href="/adminHome" onClick={adminHome}>
                    <i className="fs-4 bi-table"></i>
                    <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}>
                      <FaHome /> Home
                    </span>
                  </a>
                  </li>

                <li>
                  <a href="/adminList" onClick={adminList}>
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
                <a href="/adminProfile" onClick={() => navigate('/adminProfile')} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={`${imageUrl}`} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">Logout</span>
                </a>
              </div>
            </div>
          </div>




        <div className="col py-3">
            <br />
            <h1 style={{ textAlign: "center" }}>All house owner apply list</h1>




            <br />
            <br />

            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>

                  <th>Addressproof</th>
                  <th>Phone</th>


                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {houseOwners.map((owner) => (
  <tr key={owner.id}>
    <td>
      <div className="d-flex align-items-center">
        <div className="ms-3">
          <h4 className="fw-bold mb-1">{owner.name}</h4>
        </div>
      </div>
    </td>
    <td>
      <h4 className="text-muted mb-0">{owner.email}</h4>
    </td>
    <td>
      <h4 className="text-muted mb-0">{owner.address}</h4>
    </td>
    <td>
      <a href={`${API_BASE_URL}/${owner.addressproof}`} >
        <img
          src={`${API_BASE_URL}/${owner.addressproof}`}
          alt=""
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
      </a>
    </td>
    <td>
      <h4 className="text-muted mb-0">{owner.phone}</h4>
    </td>
    <td>
    <span className={`badge badge-${owner.status === 'Accepted' ? 'success' : 'danger'} rounded-pill d-inline`}>
  {owner.status}
</span>
    </td>
   
    
  </tr>
))}

              </tbody>
            </table>
          </div>
        </div>
        </div>
        

  );
}
