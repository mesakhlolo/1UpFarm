import React, { useState, useEffect } from 'react';
import { getPlants } from '../utils/api.plant'; // Import fungsi getPlants
import ActivePlants from '../components/ActivePlants';
import CompletedPlants from '../components/CompletedPlants';
import Notif from "../components/Notif";
import SearchBar from '../components/SearchBarPlantingArea';

const PlantingArea = () => {
  const [plantsData, setPlantsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPlants()  // Menggunakan fungsi getPlants
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data.results)) {
          setPlantsData(response.data.results);
        } else {
          console.error('Data yang diterima bukan array:', response.data.results);
          setPlantsData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPlants = Array.isArray(plantsData) ? plantsData.filter((plant) =>
    plant.plantName && plant.plantName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];
  
  const activePlants = filteredPlants.filter((plant) => plant.status !== 'Selesai');
  const completedPlants = filteredPlants.filter((plant) => plant.status === 'Selesai');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="planting-area flex-column align-items-start justify-content-start grayBg" style={{ width: '100%', height: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
      <div className="d-flex p-5 align-items-center justify-content-center justify-content-between" style={{ width: "100%", height: "15vh" }}>
        <h1 className="fontPoppins fw-bold mb-0">Lacak Tanaman</h1>
        <Notif />
      </div>
      <div className="position-relative mb-3 mx-4" style={{ width: '95%' }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <ActivePlants plants={activePlants} />
      <CompletedPlants plants={completedPlants} />
    </main>
  );
};

export default PlantingArea;