import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../assets/styles/css/Sidebar.css";

// Import Ikon
import LogoPurple from "../assets/images/icons/Logo-1UPFarm-Ungu.svg";
import IconPerson from "../assets/images/icons/Person.svg";
import IconNotes from "../assets/images/icons/Notes.svg";
import IconPlant from "../assets/images/icons/Plant.svg";
import IconTask from "../assets/images/icons/Task.svg";
import IconSetting from "../assets/images/icons/Setting.svg";
import IconExit from "../assets/images/icons/Exit.svg";
import IconBantuan from "../assets/images/icons/Bantuan.svg";
import IconDetailProfil from "../assets/images/icons/detailProfil.svg";
import IconGantiSandi from "../assets/images/icons/lupaSandi.svg";
import IconArrowDown from "../assets/images/icons/ArrowDown.svg"; // Impor SVG panah kustom

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
      {/* Bagian Logo */}
      <div className="sidebar-logo">
        <img
          src={LogoPurple}
          alt="Logo 1UPFarm"
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

      {/* Menu Utama */}
      <div className="sidebar-menu-container">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? "sidebar-menu-item-active" : ""}`}>
            <img
              src={item.icon}
              alt={item.label}
              className="sidebar-menu-icon"
            />
            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Dropdown Pengaturan */}
        <Dropdown>
          <Dropdown.Toggle className="sidebar-dropdown-toggle" variant="none">
            <div className="sidebar-dropdown-content">
              <img
                src={IconSetting}
                alt="Pengaturan"
                className="sidebar-menu-icon"
              />
              <span>Pengaturan</span>
              {/* Ikon panah kustom yang diposisikan ke kanan */}
              <img
                src={IconArrowDown}
                alt="Panah Bawah"
                className="sidebar-dropdown-arrow"
              />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="sidebar-dropdown-menu">
            <NavLink
              to="/dashboard/detail-profile"
              className="sidebar-menu-item">
              <img
                src={IconDetailProfil}
                alt="Detail Profil"
                className="sidebar-menu-icon"
              />
              <span>Detail Profil</span>
            </NavLink>
            <NavLink
              to="/dashboard/change-password"
              className="sidebar-menu-item">
              <img
                src={IconGantiSandi}
                alt="Ganti Sandi"
                className="sidebar-menu-icon"
              />
              <span>Ganti Sandi</span>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Bagian Footer */}
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
