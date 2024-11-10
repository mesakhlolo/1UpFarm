// src/layouts/MainLayout.jsx
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import PlantingArea from "../pages/PlantingArea";
import AddPlant from "../pages/AddPlant";
import DailyTasks from "../pages/DailyTasks";
import DetailProfil from "../pages/DetailProfil";
import GantiSandi from "../pages/GantiSandi";
import Notif from "../components/Notif";

function MainLayout() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/track-plant" element={<PlantingArea />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/notifications" element={<Notif />} />
        <Route path="/detail-profile" element={<DetailProfil />} />
        <Route path="/change-password" element={<GantiSandi />} />
      </Routes>
    </div>
  );
}

export default MainLayout;