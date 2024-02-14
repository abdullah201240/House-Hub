import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Signin from './Signin';  
import Signup from './Signup';  
import './CSS/Index.css';

export default function Index() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">House Hub</h2>
        </div>

        <div className="menu">
          <ul>
            <li><NavLink to="/signin" activeClassName="active">SIGN IN</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active">SIGN UP</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <h1><span>House Hub</span></h1>
                <p className="par">
                  The House Hub project is a streamlined household management system that includes user roles (Admin, House Owner, User), house registration, user management, task assignment, task completion tracking, weekly reporting, a notification system, personalized dashboards, profile management, and a review/feedback mechanism.

                  Admins oversee user registrations and house owner requests. House owners can register their houses, add users, and assign tasks. Users mark tasks as completed and submit weekly reports. A notification system keeps everyone informed. Personalized dashboards display relevant information, and users can update their profiles.

                  The system ensures security with robust authentication and encryption mechanisms. The project promotes efficient collaboration, accountability, and communication within households.
                </p>
                <button className="cn"><NavLink to="/signup">SignUp</NavLink></button>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
