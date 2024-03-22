import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import './CSS/houseownernavbar.css'
export default function HouseOwnerDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate('/houseOwnerSignin');
    }
    else{

       console.log(location.state.data.data)

    }
  }, [location.state, navigate])
  const houseOwnerRequest = async () => {
    navigate('/houseOwnerRequest', { state: { data: location.state.data } });
  };
  const houseOwnerDashboard = async () => {
    navigate('/houseOwnerDashboard', { state: { data: location.state.data } });
  };
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="/"><h1 style={{color:"white",fontFamily:"Fantasy"}}>HouseHub</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:300}}>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <a class="nav-link" href="/houseOwnerDashboard" onClick={houseOwnerDashboard}>
          <h3>Home</h3> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/houseOwnerRequest" onClick={houseOwnerRequest}>
          
          <h3>Request</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Link</a>
      </li>
      
      
      
    </ul>
    
  </div>
</nav>
<br/>
<h1 style={{textAlign:"center" }}> <l>All members residing within the house</l></h1>

<br/>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>





</div>
        
  )
}
