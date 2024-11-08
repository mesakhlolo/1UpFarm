import React, { useState } from 'react';
import { FaUser, FaSeedling, FaTasks, FaCog, FaSignOutAlt, FaRegFileAlt, FaLock, FaQuestionCircle, FaFire, FaPlusCircle} from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import '../layout/sidebar.css';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column p-3" style={{ backgroundColor: 'white', color: '#661599' }}>
        {/* Logo */}
        <div className="logo mb-4">
          <img src="/assets/logo1.png" alt="Logo" className="img-fluid" style={{ width: '80%' }} />
        </div>

        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="sidebar-item mb-3 d-flex align-items-center" style={{ color: '#661599' }}>
            <FaUser size={24} />
            <span className="ms-3">Profile</span>
          </div>

          {/* Lacak Tanaman */}
          <div className="sidebar-item mb-3 d-flex align-items-center" style={{ color: '#661599' }}>
            <FaSeedling size={24} />
            <span className="ms-3">Lacak Tanaman</span>
          </div>

          {/* Tambah Tanaman */}
          <div className="sidebar-item mb-3 d-flex align-items-center" style={{ color: '#661599' }}>
            <FaPlusCircle size={24} />
            <span className="ms-3">Tambah Tanaman</span>
          </div>

          {/* Tugas Harian */}
          <div className="sidebar-item mb-3 d-flex align-items-center" style={{ color: '#661599' }}>
            <FaTasks size={24} />
            <span className="ms-3">Tugas Harian</span>
          </div>

          {/* Pengaturan */}
          <div className="sidebar-item mb-3">
            <Dropdown>
              <Dropdown.Toggle
                className="text-purple w-100 border-0 bg-transparent d-flex align-items-center sidebar-item"
                as="button"
              >
                <FaCog size={24} />
                <span className="ms-3">Pengaturan</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-white text-white w-100">
                <Dropdown.Item as="div" className="d-flex align-items-center" style={{ color: '#661599' }}>
                  <FaRegFileAlt size={18} />
                  <span className="ms-2">Detail Profile</span>
                </Dropdown.Item>
                <Dropdown.Item as="div" className="d-flex align-items-center" style={{ color: '#661599' }}>
                  <FaLock size={18} />
                  <span className="ms-2">Kata Sandi</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Pusat Bantuan */}
        <div className="sidebar-item logout d-flex align-items-center" style={{ color: '#661599' }}>
          <FaQuestionCircle size={24} />
          <span className="ms-3">Pusat Bantuan</span>
        </div>

        {/* Logout */}
        <div className="sidebar-item logout d-flex align-items-center" style={{ color: '#661599' }}>
          <FaSignOutAlt size={24} />
          <span className="ms-3">Logout</span>
        </div>
      </div>
        
        {/* test halaman kosong */}
      <div className="main-content">
        <h1>Isi ygy</h1>
        <p>Semangat hehehe <FaFire size={24} /></p>
      </div>
    </div>
  );
};

export default Sidebar;
