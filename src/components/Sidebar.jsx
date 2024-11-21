import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../assets/styles/css/Sidebar.css";

// Import Icons
import LogoPurple from "../assets/images/icons/Logo-1UPFarm-Ungu.svg";
import IconPerson from "../assets/images/icons/Person.svg";
import IconNotes from "../assets/images/icons/Notes.svg";
import IconPlant from "../assets/images/icons/Plant.svg";
import IconTask from "../assets/images/icons/Task.svg";
import IconSetting from "../assets/images/icons/Setting.svg";
import IconExit from "../assets/images/icons/Exit.svg";
import IconBantuan from "../assets/images/icons/Bantuan.svg";

const menuItems = [
  {
    to: "/dashboard/profile",
    icon: IconPerson,
    label: "Profil",
  },
  {
    to: "/dashboard/track-plant",
    icon: IconNotes,
    label: "Lacak Tanaman",
  },
  {
    to: "/dashboard/add-plant",
    icon: IconPlant,
    label: "Tambah Tanaman",
  },
  {
    to: "/dashboard/daily-tasks",
    icon: IconTask,
    label: "Tugas Harian",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <img
          src={LogoPurple}
          alt="1UPFarm Logo"
          className="sidebar-logo-image"
        />
        <h2
          className="sidebar-logo-text"
          style={{
            fontSize: "25px",
            textAlign: "center",
            marginTop: "10px",
          }}>
          1UPFarm
        </h2>
      </div>

      {/* Main Menu */}
      <div className="sidebar-menu-container">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? "sidebar-menu-item-active" : ""}`
            }>
            <img
              src={item.icon}
              alt={item.label}
              className="sidebar-menu-icon"
            />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Settings Dropdown */}
        <Dropdown>
          <Dropdown.Toggle className="sidebar-dropdown-toggle" variant="none">
            <img
              src={IconSetting}
              alt="Pengaturan"
              className="sidebar-menu-icon"
            />
            <span>Pengaturan</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="sidebar-dropdown-menu">
            <NavLink
              to="/dashboard/detail-profile"
              className="sidebar-menu-item">
              <img
                src={IconNotes}
                alt="Detail Profil"
                className="sidebar-menu-icon"
              />
              <span>Detail Profil</span>
            </NavLink>
            <NavLink
              to="/dashboard/change-password"
              className="sidebar-menu-item">
              <img
                src={IconPlant}
                alt="Ganti Sandi"
                className="sidebar-menu-icon"
              />
              <span>Ganti Sandi</span>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Footer Section */}
      <div className="sidebar-footer-section">
        <NavLink to="/dashboard/help" className="sidebar-footer-item">
          <img
            src={IconBantuan}
            alt="Pusat Bantuan"
            className="sidebar-menu-icon"
          />
          <span>Pusat Bantuan</span>
        </NavLink>
        <NavLink to="/logout" className="sidebar-footer-item">
          <img src={IconExit} alt="Keluar" className="sidebar-menu-icon" />
          <span>Keluar</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;