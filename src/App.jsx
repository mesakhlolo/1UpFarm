import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content" style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Selamat Datang di 1UPFarm</h1>
        <p>Kelola pertanian urbanmu dengan mudah!</p>
      </div>
    </div>
  );
}

export default App;
