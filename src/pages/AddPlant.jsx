import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Image,
  Carousel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PlacetoPlant from "../assets/images/illustrations/Tempat-Penanaman.png";
import PlantinginGround from "../assets/images/illustrations/Penanaman-Tanah.png";
import PlantinginHydroponics from "../assets/images/illustrations/Penanaman-Hidropnik.png";
import MethodPlanting from "../assets/images/illustrations/Metode-Penanaman.png";
import MethodPot from "../assets/images/illustrations/Metode-Pot.png";
import MethodPolybag from "../assets/images/illustrations/Metode-Polybag.png";
import IconPlay from "../assets/images/icons/Play.svg";

import BadgeEasy from "../assets/images/illustrations/badge-easy.png";
import BadgeMedium from "../assets/images/illustrations/badge-medium.png";
import BadgeHard from "../assets/images/illustrations/badge-hard.png";
import BadgeExpert from "../assets/images/illustrations/badge-expert.png";
import BadgeMaster from "../assets/images/illustrations/badge-master.png";

import BawangMerah from "../assets/images/illustrations/bawang-merah.png";
import BawangPutih from "../assets/images/illustrations/bawang-putih.png";
import Bayam from "../assets/images/illustrations/bayam.png";
import Brokoli from "../assets/images/illustrations/brokoli.png";
import Cabai from "../assets/images/illustrations/cabai.png";
import DaunBawang from "../assets/images/illustrations/daun-bawang.png";
import Sawi from "../assets/images/illustrations/sawi.png";
import Selada from "../assets/images/illustrations/selada.png";
import Semangka from "../assets/images/illustrations/semangka.png";
import Terong from "../assets/images/illustrations/terong.png";
import Toge from "../assets/images/illustrations/toge.png";
import Tomat from "../assets/images/illustrations/tomat.png";
import Wortel from "../assets/images/illustrations/wortel.png";

import Notif from "../components/Notif";
import "../assets/styles/css/AddPlant.css";

const AddPlant = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(null);

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

  const refreshPage = () => {
    window.location.reload(true);
  };

  const handleStart = () => {
    navigate("/dashboard/daily-tasks");
  };

  const renderProgressBar = () => (
    <div
      className="d-flex flex-row gap-4 pt-4 pb-2 align-items-center justify-content-center"
      style={{ width: "100%" }}
    >
      {[0, 1, 2, 3].map((step) => (
        <div
          key={step}
          className={`${
            step <= activeStep ? "primaryBg" : "secondaryBg"
          } px-4 py-1 rounded`}
        ></div>
      ))}
    </div>
  );

  const placeOptions = [
    {
      id: "ground",
      title: "Penanaman di Tanah",
      description:
        "Menanam menggunakan tanah memberikan akar tanaman akses langsung pada unsur hara alami.",
      icon: PlantinginGround,
    },
    {
      id: "hydroponic",
      title: "Hidroponik",
      description:
        "Cara menanam menggunakan media air untuk menjadi media tanam.",
      icon: PlantinginHydroponics,
    },
  ];

  const methodOptions = [
    {
      id: "pot",
      title: "Pot",
      description:
        "Cara menanam tanaman dalam wadah pot. Pot bisa diletakkan di mana saja, sangat fleksibel.",
      icon: MethodPot,
    },
    {
      id: "polybag",
      title: "Polybag",
      description:
        "Metode menanam dalam kantong plastik, polybag menjadi media tanam praktis diruang terbatas.",
      icon: MethodPolybag,
    },
  ];

  const plants = [
    {
      id: 1,
      title: "Bawang Merah",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: BawangMerah,
      harvestTime: "60 - 70 hari",
    },
    {
      id: 2,
      title: "Bawang Putih",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: BawangPutih,
      harvestTime: "90 - 120 hari",
    },
    {
      id: 3,
      title: "Bayam",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Bayam,
      harvestTime: "20 - 30 hari",
    },
    {
      id: 4,
      title: "Brokoli",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Brokoli,
      harvestTime: "60 - 90 hari",
    },
    {
      id: 5,
      title: "Cabai",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Cabai,
      harvestTime: "70 - 90 hari",
    },
    {
      id: 6,
      title: "Daun Bawang",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: DaunBawang,
      harvestTime: "60 - 75 hari",
    },
    {
      id: 7,
      title: "Sawi",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Sawi,
      harvestTime: "30 - 40 hari",
    },
    {
      id: 8,
      title: "Selada",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Selada,
      harvestTime: "30 - 40 hari",
    },
    {
      id: 9,
      title: "Semangka",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Semangka,
      harvestTime: "80 - 90 hari",
    },
    {
      id: 10,
      title: "Terong",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Terong,
      harvestTime: "65 - 80 hari",
    },
    {
      id: 11,
      title: "Toge",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Toge,
      harvestTime: "5 - 7 hari",
    },
    {
      id: 12,
      title: "Tomat",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Tomat,
      harvestTime: "60 - 80 hari",
    },
    {
      id: 13,
      title: "Wortel",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Wortel,
      harvestTime: "70 - 80 hari",
    },
  ];

  return (
    <div
      id="root"
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start hide-scrollbar"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "300px",
      }}
    >
      <Container>
        <div className="d-flex p-4 align-items-center justify-content-between">
          <h1 className="fontPoppins fw-bold mb-0">Tambah Tanaman</h1>
          <Notif />
        </div>
        {renderProgressBar()}

        <Carousel
          activeIndex={activeStep}
          controls={false}
          indicators={false}
          interval={null}
        >
          {/* Tahap 1: Pilih Tempat Penanaman */}
          <Carousel.Item>
            <Container>
              <div className="text-center my-4">
                <h3 className="fontPoppins fw-bold">
                  Dimana Kamu Ingin Menanam?
                </h3>
              </div>

              <div className="d-flex justify-content-center align-items-center py-5 px-5">
                <Card
                  className="border-0 p-1 bg-white rounded"
                  style={{ width: "350px" }}
                >
                  <Card.Img
                    variant="top"
                    src={PlacetoPlant}
                    className="rounded"
                  />
                </Card>

                <Form className="" style={{ marginLeft: "150px" }}>
                  <Form.Group className="d-flex flex-column gap-4">
                    {placeOptions.map((place) => (
                      <Card
                        key={place.id}
                        className={`d-flex flex-row align-items-center border-0 hover-card selection-card ${
                          selectedPlace && selectedPlace.id === place.id
                            ? "active"
                            : "hovercard"
                        }`}
                        style={{
                          borderRadius: "10px",
                          width: "400px",
                          cursor: "pointer",
                        }}
                        onClick={() => handlePlaceSelect(place)}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center p-1 position-absolute bg-white"
                          style={{
                            left: "-60px",
                            borderRadius: "100%",
                            aspectRatio: "1/1",
                            scale: "1.5",
                          }}
                        >
                          <div
                            className="p-2"
                            style={{
                              borderRadius: "100%",
                              backgroundColor: "#EBE9FF",
                            }}
                          >
                            <Image
                              src={place.icon}
                              className="w-100 bg-transparent"
                              style={{
                                aspectRatio: "1/1",
                                objectFit: "contain",
                                objectPosition: "center",
                                scale: "0.8",
                              }}
                            />
                          </div>
                        </div>
                        <div className="py-4" style={{ paddingLeft: "60px" }}>
                          <Card.Title className="fw-bold">
                            {place.title}
                          </Card.Title>
                          <Card.Text>{place.description}</Card.Text>
                        </div>
                      </Card>
                    ))}
                  </Form.Group>
                </Form>
              </div>
            </Container>
          </Carousel.Item>

          {/* Tahap 2: Pilih Metode Penanaman */}
          <Carousel.Item>
            <Container>
              <div className="text-center my-4">
                <h3 className="fontPoppins fw-bold">
                  Metode yang ingin kamu gunakan?
                </h3>
              </div>

              <div className="d-flex justify-content-center align-items-center py-5 px-5">
                <Card
                  className="border-0 p-1 bg-white rounded"
                  style={{ width: "350px" }}
                >
                  <Card.Img
                    variant="top"
                    src={MethodPlanting}
                    className="rounded"
                  />
                </Card>

                <Form className="" style={{ marginLeft: "150px" }}>
                  <Form.Group className="d-flex flex-column gap-4">
                    {methodOptions.map((method) => (
                      <Card
                        key={method.id}
                        className={`d-flex flex-row align-items-center border-0 hover-card selection-card ${
                          selectedMethod && selectedMethod.id === method.id
                            ? "active"
                            : "hovercard"
                        }`}
                        style={{
                          borderRadius: "10px",
                          width: "400px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleMethodSelect(method)}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center p-1 position-absolute bg-white"
                          style={{
                            left: "-60px",
                            borderRadius: "100%",
                            aspectRatio: "1/1",
                            scale: "1.7",
                          }}
                        >
                          <div
                            className="p-2"
                            style={{
                              borderRadius: "100%",
                              backgroundColor: "#EBE9FF",
                            }}
                          >
                            <Image
                              src={method.icon}
                              className="w-100 bg-transparent"
                              style={{
                                aspectRatio: "1/1",
                                objectFit: "contain",
                                objectPosition: "center",
                                scale: "0.8",
                              }}
                            />
                          </div>
                        </div>
                        <div className="py-4" style={{ paddingLeft: "60px" }}>
                          <Card.Title className="fw-bold">
                            {method.title}
                          </Card.Title>
                          <Card.Text>{method.description}</Card.Text>
                        </div>
                      </Card>
                    ))}
                  </Form.Group>
                </Form>
              </div>
            </Container>
          </Carousel.Item>

          {/* Tahap 3: Pilih Tanaman */}
          <Carousel.Item>
            <div className="text-center my-4">
              <h3 className="fontPoppins fw-bold">Pilih Tanamanmu!</h3>
            </div>

            <Container className="w-100 px-5 d-flex flex-wrap flex-row gap-3 align-items-center justify-content-center mb-5">
              <Row className="gy-3">
                {plants.map((plant) => (
                  <Col xs={6} md={4} lg={3} key={plant.id}>
                    <Card
                      className={`plant-card selection-card ${
                        selectedPlant && selectedPlant.id === plant.id
                          ? "active"
                          : "hovercard"
                      }`}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#EBE9FF",
                        aspectRatio: "4/5",
                      }}
                      onClick={() => handlePlantSelect(plant)}
                    >
                      <Card.Body className="d-flex flex-column align-items-center justify-content-between gap-2 text-center rounded-4 pt-4">
                        <div>
                          <Card.Title
                            className="fw-semibold mb-2"
                            style={{ fontSize: "1.1rem" }}
                          >
                            {plant.title}
                          </Card.Title>
                          <Card.Subtitle className="mb-0 text-muted d-flex align-items-center justify-content-center gap-2">
                            <Card.Img
                              className=""
                              style={{ width: "30px", aspectRatio: "1/1" }}
                              variant="top"
                              src={plant.difficulty}
                            />
                            {plant.mastery}
                          </Card.Subtitle>
                        </div>
                        <Card.Img
                          style={{ width: "80%", aspectRatio: "1/1" }}
                          variant="top"
                          src={plant.image}
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

          {/* Tahap 4: Prediksi Tanggal Panen */}
          <Carousel.Item className="px-5 py-3">
            <Container className="d-flex flex-column align-items-center justify-content-center">
              {selectedPlace && selectedMethod && selectedPlant && (
                <div className="selection-result m-0 w-75 d-flex flex-row p-3 pe-5 mt-3 align-items-center justify-content-between secondaryBg rounded-4">
                  <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                    <img
                      src={selectedPlant.image}
                      className="rounded"
                      style={{ width: "90px", aspectRatio: "1/1" }}
                    />
                    <div className="h-100 d-flex flex-column align-items-start justify-content-center gap-2">
                      <h5 className="fw-semibold fontPoppins mb-0">
                        {selectedPlant.title}
                      </h5>
                      <p className="fontPoppins mb-0">
                        {selectedPlace.title} - {selectedMethod.title}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={refreshPage}
                      className="fontPoppins primaryBg border-0 text-white px-5 py-1 rounded d-flex align-items-center justify-content-center"
                    >
                      Ubah
                    </button>
                  </div>
                </div>
              )}
              <div className="text-center my-4">
                <h3 className="fontPoppins fw-semibold">
                  Prediksi Tanggal Panen
                </h3>
              </div>

              <div className="w-100 d-flex justify-content-center mt-5">
                <div className="w-50 d-flex flex-row align-items-center justify-content-between secondaryBg py-3 px-5 rounded-3">
                  <div className="d-flex flex-column align-items-end gap-2">
                    <h5 className="mb-0 textPoppin fw-semibold">
                      Tanggal Mulai
                    </h5>
                    <p className="mb-0 textPoppin">5 Jan 2024</p>
                  </div>
                  <img src={IconPlay} alt="Play Icon" />
                  <div className="d-flex flex-column align-items -start gap-2">
                    <h5 className="mb-0 textPoppin fw-semibold">
                      Prediksi Panen
                    </h5>
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
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default AddPlant;
