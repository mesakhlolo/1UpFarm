import { NavLink } from "react-router-dom";
import LogoPurple from "../../assets/images/icons/Logo-1UPFarm-Ungu.svg";
import IconPerson from "../../assets/images/icons/Person.svg";
import IconNotes from "../../assets/images/icons/Notes.svg";
import IconPlant from "../../assets/images/icons/Plant.svg";
import IconTask from "../../assets/images/icons/Task.svg";
import IconSetting from "../../assets/images/icons/Setting.svg";
import IconExit from "../../assets/images/icons/Exit.svg";

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-white d-flex flex-column fontPoppins"
      style={{ width: "22%", height: "100vh" }}
    >
      <div className="d-flex flex-row align-items-center justify-content-center text-center py-4 my-2">
        <img src={LogoPurple} style={{ width: "55px", aspectRatio: "1/1" }} />
        <h1 className="fw-bold primaryColor lh-1 mb-0 ms-2">1UPFarm</h1>
      </div>
      <NavLink
        exact
        to="/"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconPerson} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Profil</h5>
      </NavLink>
      <NavLink
        to="/LacakTanaman"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconNotes} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Lacak Tanaman</h5>
      </NavLink>
      <NavLink
        to="/TambahTanaman"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconPlant} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Tambah Tanaman</h5>
      </NavLink>
      <NavLink
        to="/TugasHarian"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconTask} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Tugas Harian</h5>
      </NavLink>
      <NavLink
        to="/Pengaturan"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconSetting} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Pengaturan</h5>
      </NavLink>
      <NavLink
        to="#"
        className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        activeClassName="activeSidebar"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <img src={IconExit} style={{ width: "30px", aspectRatio: "1/1" }} />
        <h5 className="primaryColor fw-semibold mb-0 ms-2">Keluar</h5>
      </NavLink>
    </div>
  );
};

export default Sidebar;
