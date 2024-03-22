import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import './CSS/houseownernavbar.css'
export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

    
  const houseJoin = async () => {
    navigate('/houseJoin', { state: { data: location.state.data } });
  };

  const houseInfo = async () => {
    navigate('/houseInfo', { state: { data: location.state.data } });
  };
  
  const dashboard = async () => {
    navigate('/dashboard', { state: { data: location.state.data } });
  };



  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate('/signin');
    }
    else{

       console.log(location.state.data.data)

    }
  }, [location.state, navigate])

  
  
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="/"><h1 style={{color:"white",fontFamily:"Fantasy"}}>HouseHub</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:300}}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link" href="/dashboard" onClick={dashboard}>
          
          <h3>Home</h3> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/houseJoin" onClick={houseJoin}>
          <h3>HouseJoin</h3></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/houseInfo" onClick={houseInfo}><h3>HouseInfo</h3><span className="sr-only">(current)</span></a>
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
<br/>
<h1 style={{textAlign:"center"}}>Your Task</h1>

<br/>

<table className="table">
  <thead className="thead-dark">
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

<table className="table">
  <thead className="thead-light">
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
