import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';
import { FaHome, FaUser } from 'react-icons/fa';


export default function AdminHome() {



  const [houseOwners, setHouseOwners] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  const { state } = location;
  const adminHouseOwnerList = async () => {
    navigate('/adminHouseOwnerList', { state: { data: state.data } });
  };

  const adminUserList = async () => {
    navigate('/adminUserList', { state: { data: state.data } });
  };

  const adminList = async () => {
    navigate('/adminList', { state: { data: state.data } });
  };
  
  const adminProfile = async () => {
    navigate('/adminProfile', { state: { data: state.data } });
  }; 
  const photo = location.state.data.data.photo;
  const imageUrl = `${API_BASE_URL}/${photo}`;

  if (!location) {
    console.log("not okay")

  }
  useEffect(() => {

    if (!location.state || !location.state.data || !location.state.data.data || !location.state.data.data.username) {
      navigate('/adminSignin');
    }
    else {
      console.log("okay")

      fetch(`${API_BASE_URL}/housePandingList`)
        .then((response) => response.json())
        .then((data) => setHouseOwners(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [location.state, navigate]);





  if (!location.state.data.data.username) {
    console.log('Please enter a username')

  }
  const handleAccept = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/AdminUpdateHouseOwnerStatus/${email}/updateStatus`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newStatus: 'Accepted' }),
      });

      if (response.ok) {
        setHouseOwners(prevOwners => {
          return prevOwners.map(owner => {
            if (owner.email === email) {
              return { ...owner, status: 'Accepted' };
            }
            return owner;
          });

        });
        window.location.reload();

      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }

  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <h5>Welcome {location.state.data.data.name}</h5>
                <li className="nav-item">
                  <a href="/adminHome" onClick={() => navigate('/adminHome', { state: { data: location.state } })} className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: "20px" }}><FaHome /> Home</span>
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
                <a href="/adminProfile" onClick={adminProfile} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={`${imageUrl}`} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">Logout</span>
                </a>
              </div>
            </div>
          </div>












          <div className="col py-3">
            <br />
            <h1 style={{ textAlign: "center" }}>All house owner list</h1>




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
                  <th>Actions</th>
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
                      <span className={`badge badge-${owner.status === 'Active' ? 'success' : 'danger'} rounded-pill d-inline`}>
                        {owner.status}
                      </span>
                    </td>
                    <td>
                      {owner.status !== 'Accepted' && (
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded"
                          onClick={() => handleAccept(owner.email)}
                        >
                          Accept
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>



  );
}

