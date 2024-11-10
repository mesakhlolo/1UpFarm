import React from 'react';
import PropTypes from 'prop-types';
import TanamanCard from '../components/TanamanCard';

const CompletedPlants = ({ plants }) => {
  return (
    <div>
      <h2 className="fontPoppins fw-bold h5 font-weight-bold mb-3 ms-4">Tanaman Selesai</h2>
      <div className="scrollable row mb-4 mx-4" style={{ maxHeight: '400px' }}>
        {plants.map((plant, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
            <TanamanCard name={plant.name} status={plant.status} condition={plant.condition} image={plant.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

CompletedPlants.propTypes = {
  plants: PropTypes.array.isRequired,
};

export default CompletedPlants;
