// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './route/MainLayout';  // Layout dengan Sidebar
import AuthLayout from './route/AuthLayout';  // Layout tanpa Sidebar

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman yang tidak membutuhkan Sidebar */}
        <Route path="/" element={<AuthLayout />} />
        <Route path="/create-account" element={<AuthLayout />} />
        <Route path="/login" element={<AuthLayout />} />

        {/* Halaman yang menggunakan Sidebar */}
        <Route path="/profile" element={<MainLayout />} />
        <Route path="/to-do" element={<MainLayout />} />
        <Route path="/pengaturan" element={<MainLayout />} />
        <Route path="/kata-sandi" element={<MainLayout />} />
        
        {/* Jika ada rute lain yang membutuhkan Sidebar, tambahkan di sini */}
        
        {/* Catch-all untuk halaman yang tidak ditemukan */}
        <Route path="*" element={<AuthLayout />} /> {/* Jika ada 404 atau halaman tidak ditemukan, arahkan ke AuthLayout */}
      </Routes>
    </Router>
  );
}

export default App;
