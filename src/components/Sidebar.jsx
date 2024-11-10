import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import LogoPurple from "../assets/images/icons/Logo-1UPFarm-Ungu.svg";
import IconPerson from "../assets/images/icons/Person.svg";
import IconNotes from "../assets/images/icons/Notes.svg";
import IconPlant from "../assets/images/icons/Plant.svg";
import IconTask from "../assets/images/icons/Task.svg";
import IconSetting from "../assets/images/icons/Setting.svg";
import IconExit from "../assets/images/icons/Exit.svg";
import IconBantuan from "../assets/images/icons/Bantuan.svg";

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-white d-flex flex-column fontPoppins"
      style={{ width: "22%", height: "100vh" }}
    >
      <div className="d-flex flex-row align-items-center justify-content-center text-center py-4 my-2">
        <img
          src={LogoPurple}
          style={{ width: "55px", aspectRatio: "1/1" }}
          alt="Logo"
        />
        <h1 className="fw-bold primaryColor lh-1 mb-0 ms-2">1UPFarm</h1>
      </div>
      <NavLink
        exact
        to="/"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img
          src={IconPerson}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconPerson"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Profil</h5>
      </NavLink>
      <NavLink
        to="/track-plant"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img
          src={IconNotes}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconNotes"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Lacak Tanaman</h5>
      </NavLink>
      <NavLink
        to="/add-plant"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img
          src={IconPlant}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconPlant"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Tambah Tanaman</h5>
      </NavLink>
      <NavLink
        to="/daily-tasks"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img
          src={IconTask}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconTask"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Tugas Harian</h5>
      </NavLink>

      {/* Menu Dropdown Pengaturan */}
      <Dropdown align="end" className="w-100">
        <Dropdown.Toggle
          className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 w-100"
          style={{
            background: "none",
            border: "none",
            color: "#611599",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <img
            src={IconSetting}
            style={{ width: "30px", aspectRatio: "1/1" }}
            alt="IconSetting"
          />
          <h5 className="primaryColor fw-semibold mb-0 ms-2">Pengaturan</h5>
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100 animate-dropdown">
          <Dropdown.Item as={NavLink} to="/detail-profile">
            Detail Profil
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/change-password">
            Ganti Sandi
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <NavLink
        to="/help"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out", marginTop: "70px" }} // Added marginTop: auto
      >
        <img
          src={IconBantuan}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconBantuan"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Pusat Bantuan</h5>
      </NavLink>
      <NavLink
        to="/logout"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out", marginTop: "auto" }} // Added marginTop: auto
      >
        <img
          src={IconExit}
          style={{ width: "30px", aspectRatio: "1/1" }}
          alt="IconExit"
        />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Keluar</h5>
      </NavLink>
    </div>
  );
};

export default Sidebar;
