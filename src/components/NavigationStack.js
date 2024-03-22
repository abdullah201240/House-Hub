import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './Index';
import Dashboard from './Dashboard';
import Signin from './Signin';
import Signup from './Signup';
import HouseOwnerSignup   from './HouseOwnerSignup';
import HouseOwnerSignin   from './HouseOwnerSignin';
import HouseOwnerDashboard from './HouseOwnerDashboard';
import AdminSignin from './AdminSignin';
import AdminHome from './AdminHome';
import AdminList from './AdminList';
import AdminHouseOwnerList from './AdminHouseOwnerList';
import AdminProfile from './AdminProfile';
import AdminUserList from './AdminUserList';

import AdminSignup from './AdminSignup';
function NavigationStack() {

  return (
    <div>
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/index" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/houseOwnerSignup" element={<HouseOwnerSignup />} />

        <Route path="/houseOwnerSignin" element={<HouseOwnerSignin />} />
        <Route path="/houseOwnerDashboard" element={<HouseOwnerDashboard />} />
        <Route path="/adminSignin" element={<AdminSignin />} />
        <Route path="/adminSignup" element={<AdminSignup />} />

        
        <Route path="/adminHome" element={<AdminHome  />} />
        
        <Route path="/adminList" element={<AdminList />} />

        

        <Route path="/adminHouseOwnerList" element={<AdminHouseOwnerList />} />

        <Route path="/adminProfile" element={<AdminProfile />} />
        
        

        <Route path="/adminUserList" element={<AdminUserList />} />

        <Route path="/*" element={<Navigate to="/index" />} />
      </Routes>
    </div>
  );
}

export default NavigationStack;
