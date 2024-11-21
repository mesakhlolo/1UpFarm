// src/App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  const isAuthenticated = true; // Simulasi autentikasi, ganti dengan data yang valid
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
