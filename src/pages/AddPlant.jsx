import React, { useState } from "react";
import { Container, Card, Row, Col, Form, Image, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import semua asset
import PlacetoPlant from "../assets/images/illustrations/Tempat-Penanaman.png";
import PlantinginGround from "../assets/images/illustrations/Penanaman-Tanah.png";
import PlantinginHydroponics from "../assets/images/illustrations/Penanaman-Hidropnik.png";
import MethodPlanting from "../assets/images/illustrations/Metode-Penanaman.png";
import MethodPot from "../assets/images/illustrations/Metode-Pot.png";
import MethodPolybag from "../assets/images/illustrations/Metode-Polybag.png";
import IconSearch from "../assets/images/icons/Search.png";
import BadgeEasy from "../assets/images/icons/Badge-Easy.png";
import Tomat from "../assets/images/icons/Tomat.png";
import IconPlay from "../assets/images/icons/Play.svg";

import Notif from "../components/Notif";
import "../assets/styles/css/AddPlant.css";

const AddPlant = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plants = [
    {
      id: 1,
      title: "Tomat",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Tomat,
      harvestTime: "28-29 hari"
    },
    {
      id: 2,
      title: "Bawang Merah",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Tomat,
      harvestTime: "35-40 hari"
    },
    // Tambahkan tanaman lainnya sesuai kebutuhan
  ];

  const placeOptions = [
    {
      id: 'ground',
      title: 'Penanaman di Tanah',
      description: 'Menanam menggunakan tanah memberikan akar tanaman akses langsung pada unsur hara alami.',
      icon: PlantinginGround
    },
    {
      id: 'hydroponic',
      title: 'Hidroponik',
      description: 'Cara menanam menggunakan media air untuk menjadi media tanam.',
      icon: PlantinginHydroponics
    }
  ];

  const methodOptions = [
    {
      id: 'pot',
      title: 'Pot',
      description: 'Cara menanam tanaman dalam wadah pot. Pot bisa diletakkan di mana saja, sangat fleksibel.',
      icon: MethodPot
    },
    {
      id: 'polybag',
      title: 'Polybag',
      description: 'Metode menanam dalam kantong plastik, polybag menjadi media tanam praktis diruang terbatas.',
      icon: MethodPolybag
    }
  ];

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setActiveStep(1);
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setActiveStep(2);
  };

  const handlePlantSelect = (plant) => {
    setSelectedPlant(plant);
    setActiveStep(3);
  };

  const handleStart = () => {
    navigate('/dashboard/daily-tasks');
  };

  const renderProgressBar = () => (
    <div 
      className="d-flex flex-row gap-4 pt-4 pb-2 align-items-center justify-content-center"
      style={{ width: "100%" }}
    >
      {[0, 1, 2, 3].map((step) => (
        <div 
          key={step} 
          className={`${step <= activeStep ? 'primaryBg' : 'secondaryBg'} px-4 py-1 rounded`}
        ></div>
      ))}
    </div>
  );

  return (
    <div 
      id="root" 
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "300px" 
      }}
    >
      <Container>
        <div className="d-flex p-4 align-items-center justify-content-between">
          <h1 className="fontPoppins fw-bold mb-0">Tambah Tanaman</h1>
          <Notif />
        </div>

        <Carousel 
          activeIndex={activeStep} 
          controls={false} 
          indicators={false} 
          interval={null}
        >
          {/* Tahap 1: Pilih Tempat Penanaman */}
          <Carousel.Item>
            {renderProgressBar()}
            <div className="text-center my-4">
              <h3 className="fontPoppins fw-bold">Dimana Kamu Ingin Menanam?</h3>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <Card className="border-0 p-1 bg-white rounded" style={{ width: "350px" }}>
                <Card.Img variant="top" src={PlacetoPlant} className="rounded" />
              </Card>

              <Form className=""  style={{ marginLeft: '150px' }}>
                <Form.Group className="d-flex flex-column gap-4">
                  {placeOptions.map((place) => (
                    <Card 
                      key={place.id}
                      onClick={() => handlePlaceSelect(place.id)}
                      className="d-flex flex-row align-items-center border-0 hover-card"
                      style={{ borderRadius: "10px", width: "400px", cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center justify-content-center p-1 position-absolute bg-white" style={{
                        left: "-60px",
                        borderRadius: "100%",
                        aspectRatio: "1/1",
                        scale: "1.5"
                      }}>
                        <div className="p-2" style={{ 
                          borderRadius: "100%", 
                          backgroundColor: "#EBE9FF" 
                        }}>
                          <Image 
                            src={place.icon} 
                            className="w-100 bg-transparent"
                            style={{
                              aspectRatio: "1/1",
                              objectFit: "contain",
                              objectPosition: "center",
                              scale: "0.8"
                            }}
                          />
                        </div>
                      </div>
                      <div className="py-4" style={{ paddingLeft: "60px" }}>
                        <Card.Title className="fw-bold">{place.title}</Card.Title>
                        <Card.Text>{place.description}</Card.Text>
                      </div>
                    </Card>
                  ))}
                </Form.Group>
              </Form>
            </div>
          </Carousel.Item>

          {/* Tahap 2: Pilih Metode Penanaman */}
          <Carousel.Item>
            {renderProgressBar()}
            <div className="text-center my-4">
              <h3 className="fontPoppins fw-bold">Metode yang ingin kamu gunakan?</h3>
            </div>

            <div className="d-flex justify-content- center align-items-center">
              <Card className="border-0 p-1 bg-white rounded" style={{ width: "350px" }}>
                <Card.Img variant="top" src={MethodPlanting} className="rounded" />
              </Card>

              <Form className="" style={{ marginLeft: '150px' }}>
                <Form.Group className="d-flex flex-column gap-4">
                  {methodOptions.map((method) => (
                    <Card 
                      key={method.id}
                      onClick={() => handleMethodSelect(method.id)}
                      className="d-flex flex-row align-items-center border-0 hover-card"
                      style={{ borderRadius: "10px", width: "420px", cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center justify-content-center p-1 position-absolute bg-white" style={{
                        left: "-60px",
                        borderRadius: "100%",
                        aspectRatio: "1/1",
                        scale: "1.7"
                      }}>
                        <div className="p-2" style={{ 
                          borderRadius: "100%", 
                          backgroundColor: "#EBE9FF" 
                        }}>
                          <Image 
                            src={method.icon} 
                            className="w-100 bg-transparent"
                            style={{
                              aspectRatio: "1/1",
                              objectFit: "contain",
                              objectPosition: "center",
                              scale: "0.8"
                            }}
                          />
                        </div>
                      </div>
                      <div className="py-4" style={{ paddingLeft: "60px" }}>
                        <Card.Title className="fw-bold">{method.title}</Card.Title>
                        <Card.Text>{method.description}</Card.Text>
                      </div>
                    </Card>
                  ))}
                </Form.Group>
              </Form>
            </div>
          </Carousel.Item>

          {/* Tahap 3: Pilih Tanaman */}
          <Carousel.Item>
            {renderProgressBar()}
            <div className="text-center my-4">
              <h3 className="fontPoppins fw-bold">Pilih Tanamanmu!</h3>
            </div>

            <Container fluid className="w-100 px-5 d-flex flex-wrap flex-row gap-3 align-items-center justify-content-center mb-5">
              <Row className="gy-3">
                {plants.map((item) => (
                  <Col xs={6} md={4} lg={3} key={item.id}>
                  <Card
                    className={`plant-card ${selectedPlant && selectedPlant.id === item.id ? "active" : ""}`}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#EBE9FF",
                      aspectRatio: "4/5",
                    }}
                    onClick={() => handlePlantSelect(item)}
                  >
                    <Card.Body className="d-flex flex-column align-items-center justify-content-between gap-2 text-center rounded-4 pt-4">
                      <div>
                        <Card.Title className="fw-semibold mb-2" style={{ fontSize: "1.1rem" }}>
                          {item.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-0 text-muted d-flex align-items-center justify-content-center gap-2">
                          <Card.Img className="" style={{ width: "30px", aspectRatio: "1/1" }} variant="top" src={item.difficulty} />
                          {item.mastery}
                        </Card.Subtitle>
                      </div>
                      <Card.Img style={{ width: "80%", aspectRatio: "1/1" }} variant="top" src={item.image} />
                    </Card.Body>
                  </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

          {/* Tahap 4: Prediksi Tanggal Panen */}
          <Carousel.Item>
            {renderProgressBar()}
            <div className="text-center my-4">
              <h3 className="fontPoppins fw-semibold">Prediksi Tanggal Panen</h3>
            </div>

            <div className="w-100 d-flex justify-content-center mt-5">
              <div className="w-50 d-flex flex-row align-items-center justify-content-between secondaryBg py-3 px-5 rounded-3">
                <div className="d-flex flex-column align-items-end gap-2">
                  <h5 className="mb-0 textPoppin fw-semibold">Tanggal Mulai</h5>
                  <p className="mb-0 textPoppin">5 Jan 2024</p>
                </div>
                <img src={IconPlay} alt="Play Icon" />
                <div className="d-flex flex-column align-items -start gap-2">
                  <h5 className="mb-0 textPoppin fw-semibold">Prediksi Panen</h5>
                  <p className="mb-0 textPoppin">28 - 29 Jan 2024</p>
                </div>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center mt-5 px-5">
              <button 
                onClick={handleStart}
                className="fontPoppins primaryBg border-0 text-white px-5 py-2 rounded"
              >
                Mulai
              </button>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default AddPlant;