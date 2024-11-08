// src/components/layout/MainLayout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';  
import Profile from '../pages/Profile';  
import ToDo from '../pages/To-Do';       
import Pengaturan from '../pages/Pengaturan'; 
import KataSandi from '../pages/KataSandi'; 

const MainLayout = () => {
    return (
      <div className="d-flex">
        {/* Sidebar berada di kiri */}
        <Sidebar />
  
        {/* Konten utama di sebelah kanan */}
        <div className="content p-4" style={{ flex: 1 }}>
          <Routes>
            {/* Rute untuk halaman-halaman yang membutuhkan Sidebar */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/to-do" element={<ToDo />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
            <Route path="/kata-sandi" element={<KataSandi />} />
          </Routes>
        </div>
      </div>
    );
  };
  
  export default MainLayout;
