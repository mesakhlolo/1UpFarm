import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/css/PlantingArea.css';

const TanamanCard = ({ name, status, condition, image }) => (
  <div className="card border-outline" style={{ width: '100%', maxWidth: '339px', height: '181px' }}>
    <div className="row no-gutters h-100">
      <div style={{ maxWidth: '169px'}}>
        <img 
          src={image} 
          alt={`${name} image`} 
          className="card-img h-100 rounded-left" 
          style={{ width: '100%', height: 'auto', maxHeight: '181px', objectFit: 'cover' }}
        />
      </div>
      <div className="col d-flex flex-column justify-content-between p-3">
        <div>
          <h5 className="card-title font-weight-bold">{name}</h5>
          <p className="card-text mb-1">Status: {status}</p>
          <p className="card-text">Kondisi: {condition}</p>
        </div>
        <div className="d-flex justify-content-center" style={{ width: '100%', height: '34px' }}>
          <button 
            className="fontPoppins primaryBg text-white border-0 rounded" 
            style={{ width: '50%', height: '30px', fontSize: '12px', padding: '5px' }} 
          >
            Lihat
          </button>
        </div>
      </div>
    </div>
  </div>
);

TanamanCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TanamanCard;