import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import PlantingArea from "../pages/PlantingArea";
import AddPlant from "../pages/AddPlant";
import DailyTasks from "../pages/DailyTasks";
import DetailPlant from "../pages/DetailPlant";
import DetailProfil from "../pages/DetailProfil";
import GantiSandi from "../pages/GantiSandi";
import Notif from "../components/Notif";

function MainLayout() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
<<<<<<< Updated upstream
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/track-plant" element={<PlantingArea />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/notifications" element={<Notif />} />
        <Route path="/detail-profile" element={<DetailProfil />} />
        <Route path="/change-password" element={<GantiSandi />} />
      </Routes>
=======
      <div className="content flex-grow-1">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/track-plant" element={<PlantingArea />} />
          <Route path="/add-plant" element={<AddPlant />} />
          <Route path="/daily-tasks" element={<DailyTasks />} />
          <Route path="/notifications" element={<Notif />} />
          <Route path="/detail-profile" element={<DetailProfil />} />
          <Route path="/detail-plant" element={<DetailPlant />} />
          <Route path="/change-password" element={<GantiSandi />} />
        </Routes>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default MainLayout;
