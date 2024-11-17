import React from "react";
import Mudah from "../assets/images/illustrations/mudah.png";
import Sedang from "../assets/images/illustrations/sedang.png";
import Susah from "../assets/images/illustrations/susah.png";
import Expert from "../assets/images/illustrations/expert.png";

const BadgeSection = () => {
  const badges = [
    { image: Mudah, label: "Mudah" },
    { image: Sedang, label: "Sedang" },
    { image: Susah, label: "Susah" },
    { image: Expert, label: "Expert" }
  ];

  return (
    <div className="profile-card badges-container">
      <h5 className="mb-4">Lencana</h5>
      <div className="badges-grid">
        {badges.map((badge, index) => (
          <div key={index} className="badge-item">
            <div className="badge-image-wrapper">
              <img 
                src={badge.image} 
                alt={`Badge ${badge.label}`} 
                className="badge-image"
              />
            </div>
            <p className="badge-label">{badge.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeSection;