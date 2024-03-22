import React from 'react';

export default function Dashboard(props) {
  var userData = props.response.data;

  return (
    <div>
      <h2>Dashboard {userData.message}</h2>
      

    </div>
  );
}
