// src/App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DetailPlant from "./pages/DetailPlant";

function App() {
<<<<<<< Updated upstream
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <Routes>
        {/* Route yang benar */}
        <Route path="/" element={<Profile />} />
        <Route path="/track-plant" element={<PlantingArea />} />
        <Route path="/track-plant/detail/1" element={<DetailPlant />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/notifications" element={<Notif />} />
        <Route path="/detail-profile" element={<DetailProfil />} />
        <Route path="/change-password" element={<GantiSandi />} />
=======
  // Status autentikasi (misalnya, dari sistem autentikasi)
  const isAuthenticated = true; 
>>>>>>> Stashed changes

  return (
    <Routes>
      {/* Rute Publik */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Rute Private (memerlukan autentikasi) */}
      <Route
        path="/dashboard/*"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
      />

      {/* Halaman 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
