import { Nav } from "react-bootstrap";
import {
  FaUser,
  FaLeaf,
  FaPlus,
  FaTasks,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-start p-3">
      <h2 className="mb-4">1UPFarm</h2>
      <Nav className="flex-column w-100">
        <Nav.Link href="#" className="sidebar-link">
          <FaUser className="icon" /> Profil
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link">
          <FaLeaf className="icon" /> Lacak Tanaman
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link">
          <FaPlus className="icon" /> Tambah Tanaman
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link">
          <FaTasks className="icon" /> Tugas Harian
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link">
          <FaCog className="icon" /> Pengaturan
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link mt-auto">
          <FaSignOutAlt className="icon" /> Keluar
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
