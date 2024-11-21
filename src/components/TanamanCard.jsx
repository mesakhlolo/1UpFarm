import React from "react";
import PropTypes from "prop-types";

const TanamanCard = ({ name, status, condition, image }) => (
  <div
    className="card"
    style={{
      width: "100%",
      maxWidth: "339px",
      height: "auto",
      padding: "10px",
      border: "none",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
    }}>
    <div className="row no-gutters h-100">
      <div style={{ maxWidth: "120px", margin: "0 auto" }}>
        <img
          src={image}
          alt={`${name} image`}
          className="card-img rounded"
          style={{
            width: "110px",
            height: "125px",
            objectFit: "cover",
            margin: "5px 0",
          }}
        />
      </div>
      <div className="col d-flex flex-column justify-content-between p-2">
        <div>
          <h5 className="card-title font-weight-bold mb-2">{name}</h5>
          <p className="card-text mb-0">
            <small>Status: {status}</small>
          </p>
          <p className="card-text">
            <small>Kondisi: {condition}</small>
          </p>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "34px" }}>
            <a href="/dashboard/detail-plant" className="text-white" style={{
              width: "90%",
            }}>
          <button
            className="fontPoppins primaryBg text-white border-0 rounded"
            style={{
              width: "90%",
              height: "30px",
              fontSize: "12px",
              padding: "5px",
              marginLeft: '15px',
              marginTop: '10px',
            }}>Lihat
          </button></a>
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
