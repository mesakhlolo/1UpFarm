import React, { useState } from 'react';
import tomatImage from '../assets/images/icons/Tomat.png';
import ActivePlants from '../components/ActivePlants';
import CompletedPlants from '../components/CompletedPlants';
import Notif from "../components/Notif";
import SearchBar from '../components/SearchBarPlantingArea';

const plantsData = [
  { name: 'Tomat', status: '1 Minggu', condition: 'Baik', image: tomatImage },
  { name: 'Bawang', status: '1 Minggu', condition: 'Baik', image: tomatImage },
  { name: 'Tomat', status: '1 Minggu', condition: 'Baik', image: tomatImage },
  { name: 'Bawang', status: '1 Minggu', condition: 'Baik', image: tomatImage },
  { name: 'Tomat', status: 'Selesai', condition: 'Baik', image: tomatImage },
  { name: 'Kangkung', status: 'Selesai', condition: 'Baik', image: tomatImage },
  { name: 'Tomat', status: 'Selesai', condition: 'Baik', image: tomatImage },
  { name: 'Kangkung', status: 'Selesai', condition: 'Baik', image: tomatImage },
];

const PlantingArea = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlants = plantsData.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activePlants = filteredPlants.filter((plant) => plant.status !== 'Selesai');
  const completedPlants = filteredPlants.filter((plant) => plant.status === 'Selesai');

  return (
    <main

      className="planting-area flex-column align-items-start justify-content-start grayBg"
      style={{ width: '100%', height: '100vh', overflowX: 'hidden', overflowY: 'auto' }}
    >
      <div
        className="d-flex p-5 align-items-center justify-content-center justify-content-between"
        style={{ width: "100%", height: "15vh" }}
      >
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
