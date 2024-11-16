import { NavLink } from "react-router-dom";
import LogoPurple from "../assets/images/icons/Logo-1UPFarm-Ungu.svg";
import IconPerson from "../assets/images/icons/Person.svg";
import IconNotes from "../assets/images/icons/Notes.svg";
import IconPlant from "../assets/images/icons/Plant.svg";
import IconTask from "../assets/images/icons/Task.svg";
import IconSetting from "../assets/images/icons/Setting.svg";
import IconExit from "../assets/images/icons/Exit.svg";
import IconBantuan from "../assets/images/icons/Bantuan.svg";
import { Dropdown } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-white d-flex flex-column justify-content-between fontPoppins"
      style={{ width: "22%", height: "100vh" }}
    >
<<<<<<< Updated upstream
      <div>
        <div className="d-flex flex-row align-items-center justify-content-center text-center py-4 my-2">
          <img
            src={LogoPurple}
            style={{ width: "55px", aspectRatio: "1/1" }}
            alt="Logo"
          />
          <h1 className="fw-bold primaryColor lh-1 mb-0 ms-2">1UPFarm</h1>
        </div>
        <NavLink
          to="/dashboard/profile"
          className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
          activeClassName="activeSidebar"
          style={{ transition: "all 0.3s ease-in-out" }}
=======
      <div className="d-flex flex-row align-items-center justify-content-center text-center py-4 my-2">
        <img
          src={LogoPurple}
          style={{ width: "55px", aspectRatio: "1/1" }}
          alt="Logo"
        />
        <h1 className="fw-bold primaryColor lh-1 mb-0 ms-2">1UPFarm</h1>
      </div>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        }
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
        to="/dashboard/track-plant"
        className={({ isActive }) =>
          isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        }
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
        to="/dashboard/add-plant"
        className={({ isActive }) =>
          isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        }
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
        to="/dashboard/daily-tasks"
        className={({ isActive }) =>
          isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
        }
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
>>>>>>> Stashed changes
        >
          <img
            src={IconPerson}
            style={{ width: "30px", aspectRatio: "1/1" }}
            alt="IconPerson"
          />
          <h5 className="primaryColor fw-semibold mb-0 ms-2">Profil</h5>
        </NavLink>
        <NavLink
          to="/dashboard/track-plant"
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
          to="/dashboard/add-plant"
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
          to="/dashboard/daily-tasks"
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

<<<<<<< Updated upstream
          <Dropdown.Menu className="w-100 animate-dropdown">
            <Dropdown.Item as={NavLink} to="/dashboard/detail-profile">
              Detail Profil
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/dashboard/change-password">
              Ganti Sandi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <NavLink
          to="/dashboard/help"
          className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
          activeClassName="activeSidebar"
          style={{ transition: "all 0.3s ease-in-out" }}
=======
      {/* Pusat Bantuan dan Keluar */}
      <div className="mt-auto">
        <NavLink
          to="/dashboard/help"
          className={({ isActive }) =>
            isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
          }
          style={{
            transition: "all 0.3s ease-in-out",
          }}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          className="text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
          activeClassName="activeSidebar"
          style={{ transition: "all 0.3s ease-in-out" }}
=======
          className={({ isActive }) =>
            isActive ? "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar activeSidebar" : "text-decoration-none d-flex flex-row align-items-center justify-content-start px-4 py-3 hoverSidebar"
          }
          style={{
            transition: "all 0.3s ease-in-out",
            marginTop: "auto", // Menjaga posisi Keluar di bagian bawah
          }}
>>>>>>> Stashed changes
        >
          <img
            src={IconExit}
            style={{ width: "30px", aspectRatio: "1/1" }}
            alt="IconExit"
          />
          <h5 className="primaryColor fw-semibold mb-0 ms-2">Keluar</h5>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
