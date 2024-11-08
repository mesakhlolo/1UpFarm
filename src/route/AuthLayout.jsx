import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';  
import CreateAccount from '../components/authentication/CreateAccount';  
import LoginAccount from '../components/authentication/LoginAccount';

const AuthLayout = () => {
  return (
    <div className="container">
      <Routes>
        {/* Rute untuk halaman yang tidak membutuhkan Sidebar */}
        <Route path="/" element={<LandingPage />} />
        {/* Tambahkan wildcard (*) pada path route yang memiliki rute anak */}
        <Route path="/create-account/*" element={<CreateAccount />} />
        <Route path="/login/*" element={<LoginAccount />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
