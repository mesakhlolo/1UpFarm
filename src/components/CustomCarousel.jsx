import React, { useState } from "react";
import { Card } from "react-bootstrap";

const CustomCarousel = ({
  items,
  title = "Carousel Title",
  showIndicators = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi navigasi
  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const movePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="custom-carousel mt-4">
      {/* Judul Carousel */}
      <h3 className="fontPoppins fw-bold mb-3">{title}</h3>

      {/* Kontainer Carousel */}
      <div className="carousel-wrapper position-relative">
        {/* Tombol Navigasi Kiri */}
        <button
          onClick={movePrev}
          className="carousel-control-prev btn btn-outline-secondary"
          style={{
            position: "absolute",
            left: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}>
          ←
        </button>

        {/* Tombol Navigasi Kanan */}
        <button
          onClick={moveNext}
          className="carousel-control-next btn btn-outline-secondary"
          style={{
            position: "absolute",
            right: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}>
          →
        </button>

        {/* Item Aktif */}
        <Card className="shadow-sm">
          <Card.Img
            variant="top"
            src={items[activeIndex].image}
            className="carousel-img img-fluid rounded"
            style={{
              height: "300px",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <Card.Title className="fontPoppins fw-bold">
              {items[activeIndex].title}
            </Card.Title>
            <Card.Text>{items[activeIndex].description}</Card.Text>
          </Card.Body>
        </Card>

        {/* Indikator */}
        {showIndicators && (
          <div className="carousel-indicators mt-3 d-flex justify-content-center">
            {items.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`indicator ${index === activeIndex ? "active" : ""}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: index === activeIndex ? "#6A0DAD" : "#ccc",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCarousel;
