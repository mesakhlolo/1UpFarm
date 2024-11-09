import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import PlantingArea from "./pages/PlantingArea";
import AddPlant from "./pages/AddPlant";
import DailyTasks from "./pages/DailyTasks";
import Setting from "./pages/Setting";
import DetailProfil from "./pages/DetailProfil";
import GantiSandi from "./pages/GantiSandi";
import Notif from "./components/Notif";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <Routes>
        {/* Rute-rute yang benar */}
        <Route path="/LacakTanaman" element={<PlantingArea />} />
        <Route path="/TambahTanaman" element={<AddPlant />} />
        <Route path="/TugasHarian" element={<DailyTasks />} />
        <Route path="/Pengaturan" element={<Setting />} />
        <Route path="/DetailProfil" element={<DetailProfil />} />
        <Route path="/GantiSandi" element={<GantiSandi />} />
        
        {/* Rute-rute baru yang diperbarui */}
        <Route path="/track-plant" element={<PlantingArea />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/notifications" element={<Notif />} />

        {/* Halaman 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
