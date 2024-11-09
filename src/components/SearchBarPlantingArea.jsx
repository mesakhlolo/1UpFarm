import React from 'react';
import searchIcon from '../assets/images/icons/Search.png';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
      }}
    >
      <img
        src={searchIcon} alt="Search Icon" style={{ width: '20px',marginRight: '10px',
        }}
      />
      <input
        type="text" placeholder="Cari tanaman..." value={searchTerm} onChange={(e) => onSearchChange(e.target.value)}
        style={{border: 'none',outline: 'none', width: '100%',}}
      />
    </div>
  );
};

export default SearchBar;