import React, { useState } from "react";
import { Container, Card, Row, Col, Form, Image } from "react-bootstrap";
import PlacetoPlant from "../assets/images/illustrations/Tempat-Penanaman.png";
import PlantinginGround from "../assets/images/illustrations/Penanaman-Tanah.png";
import PlantinginHydroponics from "../assets/images/illustrations/Penanaman-Hidropnik.png";
import MethodPlanting from "../assets/images/illustrations/Metode-Penanaman.png";
import MethodPot from "../assets/images/illustrations/Metode-Pot.png";
import MethodPolybag from "../assets/images/illustrations/Metode-Polybag.png";
import BadgeEasy from "../assets/images/icons/Tingkat-Mudah.png";
import Tomat from "../assets/images/icons/Tomat.png";
import IconPlay from "../assets/images/icons/Play.svg";
import Notif from "../components/Notif";
import "../assets/styles/css/AddPlant.css";

const AddPlant = () => {
  const plants = [
    {
      id: 1,
      title: "Tomat",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Tomat,
    },
    {
      id: 2,
      title: "Bawang Merah",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Tomat,
    },
    {
      id: 3,
      title: "Cabai",
      mastery: "Sedang",
      difficulty: BadgeEasy,
      image: Tomat,
    },
    {
      id: 4,
      title: "Selada",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Tomat,
    },
    {
      id: 5,
      title: "Bayam",
      mastery: "Sedang",
      difficulty: BadgeEasy,
      image: Tomat,
    },
    {
      id: 6,
      title: "Daun Bawang",
      mastery: "Sedang",
      difficulty: BadgeEasy,
      image: Tomat,
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (item) => {
    setSelectedCard(item);
  };

  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <div
      id="root"
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start"
      style={{ width: "78%", height: "100vh", overflowY: "auto" }}
    >
      <Container>
        <div
          className="d-flex p-5 align-items-center justify-content-center justify-content-between"
          style={{ width: "100%", height: "15vh" }}
        >
          <h1 className="fontPoppins fw-bold mb-0">Tambah Tanaman</h1>
          <Notif />
        </div>
        {/* Progress Bar 1 */}
        <div
          className="d-flex flex-row gap-4 pt-4 pb-2 align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="primaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
        </div>
        <div className="d-flex pt-4 px-5 align-items-center justify-content-start mb-0">
          <h3 className="fontPoppins fw-bold">Dimana Kamu Ingin Menanam?</h3>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-center w-100"
          style={{ gap: "110px", padding: "110px 0" }}
        >
          {/* Card Ilustrasi Penanaman */}
          <Card
            className="border-0 p-1 bg-white rounded"
            style={{ width: "500px" }}
          >
            <Card.Img variant="top" src={PlacetoPlant} className="rounded" />
          </Card>

          {/* Form Pilihan Penanaman */}
          <Form className="">
            <Form.Group className="d-flex flex-column gap-4 justify-content-center">
              {/* Pilihan Penanaman di Tanah */}
              <Card
                className="d-flex flex-row align-items-center border-0"
                style={{ borderRadius: "10px", width: "420px" }}
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
                    style={{ borderRadius: "100%", backgroundColor: "#EBE9FF" }}
                  >
                    <Image
                      src={PlantinginGround}
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
                    Penanaman di Tanah
                  </Card.Title>
                  <Card.Text>
                    Menanam menggunakan tanah memberikan akar tanaman akses
                    langsung pada unsur hara alami.
                  </Card.Text>
                </div>
              </Card>

              {/* Pilihan Penanaman di Hidroponik */}
              <Card
                className="d-flex flex-row align-items-center border-0"
                style={{ borderRadius: "10px", width: "420px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center p-1 position-absolute bg-white"
                  style={{
                    left: "-60px",
                    borderRadius: "100%",
                    aspectRatio: "1/1",
                    scale: "1.4",
                  }}
                >
                  <div
                    className="p-2"
                    style={{ borderRadius: "100%", backgroundColor: "#EBE9FF" }}
                  >
                    <Image
                      src={PlantinginHydroponics}
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
                  <Card.Title className="fw-bold">Hidroponik</Card.Title>
                  <Card.Text>
                    Cara menanam menggunakan media air untuk menjadi media
                    tanam.
                  </Card.Text>
                </div>
              </Card>
            </Form.Group>
          </Form>
        </div>
        {/* Progress Bar 2 */}
        <div
          className="d-flex flex-row gap-4 pt-4 pb-2 align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="primaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
        </div>
        <div className="d-flex pt-4 px-5 align-items-center justify-content-start mb-0">
          <h3 className="fontPoppins fw-bold">
            Metode yang ingin kamu gunakan?
          </h3>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-center w-100"
          style={{ gap: "110px", padding: "110px 0" }}
        >
          {/* Card Ilustrasi Metode Penanaman*/}
          <Card
            className="border-0 p-1 bg-white rounded"
            style={{ width: "500px" }}
          >
            <Card.Img variant="top" src={MethodPlanting} className="rounded" />
          </Card>

          {/* Form Pilihan Metode Penanaman */}
          <Form className="">
            <Form.Group className="d-flex flex-column gap-4 justify-content-center">
              {/* Pilihan Metode Penanaman menggunakan Pot */}
              <Card
                className="d-flex flex-row align-items-center border-0"
                style={{ borderRadius: "10px", width: "420px" }}
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
                    style={{ borderRadius: "100%", backgroundColor: "#EBE9FF" }}
                  >
                    <Image
                      src={MethodPot}
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
                  <Card.Title className="fw-bold">Pot</Card.Title>
                  <Card.Text>
                    Cara menanam tanaman dalam wadah pot. Pot bisa diletakkan di
                    mana saja, sangat fleksibel.
                  </Card.Text>
                </div>
              </Card>

              {/* Pilihan Metode Penanaman menggunakan Polybag */}
              <Card
                className="d-flex flex-row align-items-center border-0"
                style={{ borderRadius: "10px", width: "420px" }}
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
                    style={{ borderRadius: "100%", backgroundColor: "#EBE9FF" }}
                  >
                    <Image
                      src={MethodPolybag}
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
                  <Card.Title className="fw-bold">Polybag</Card.Title>
                  <Card.Text>
                    Metode menanam dalam kantong plastik, polybag menjadi media
                    tanam praktis diruang terbatas.
                  </Card.Text>
                </div>
              </Card>
            </Form.Group>
          </Form>
        </div>

        {/* Progress Bar 3 */}
        <div
          className="d-flex flex-row gap-4 pt-4 pb-2 mt-3 mb-4 align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
          <div className="primaryBg px-4 py-1 rounded"></div>
          <div className="secondaryBg px-4 py-1 rounded"></div>
        </div>
        {/* Select Plants */}
        <div className="w-100 d-flex flex-column gap-4 align-items-center">
          <div className="d-flex w-100 py-3 px-5 align-items-start justify-content-start mb-0">
            <h3 className="fontPoppins fw-semibold">Pilih Tanamanmu!</h3>
          </div>
          <Container
            fluid
            className="w-100 px-5 d-flex flex-wrap flex-row gap- align-items-center justify-content-center mb-5"
          >
            <Row className="gy-3">
              {plants.map((item) => (
                <Col xs={6} md={40} lg={3} key={item.id}>
                  <Card
                    className={`selection-card ${selectedCard && selectedCard.id === item.id
                        ? "active"
                        : "hovercard"
                      }`}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#EBE9FF",
                      aspectRatio: "4/5",
                    }}
                    onClick={() => handleSelect(item)}
                  >
                    <Card.Body
                      className="d-flex flex-column align-items-center justify-content-between gap-2 text-center rounded-4 pt-4"
                      style={{ backgroundColor: "#EBE9FF" }}
                    >
                      <div>
                        <Card.Title
                          className="fw-semibold mb-2"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-0 text-muted d-flex align-items-center justify-content-center gap-2">
                          <Card.Img
                            className=""
                            style={{ width: "30px", aspectRatio: "1/1" }}
                            variant="top"
                            src={item.difficulty}
                          />
                          {item.mastery}
                        </Card.Subtitle>
                      </div>
                      <Card.Img
                        style={{ width: "80%", aspectRatio: "1/1" }}
                        variant="top"
                        src={item.image}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Progress Bar 4 */}
          <div
            className="d-flex flex-row gap-4 pt-4 mt-5 mb-1 align-items-center justify-content-center"
            style={{ width: "100%" }}
          >
            <div className="secondaryBg px-4 py-1 rounded"></div>
            <div className="secondaryBg px-4 py-1 rounded"></div>
            <div className="secondaryBg px-4 py-1 rounded"></div>
            <div className="primaryBg px-4 py-1 rounded"></div>
          </div>
          {selectedCard && (
            <div className="selection-result m-0 w-75 d-flex flex-row py-2 px-3 pe-5 mt-3 align-items-center justify-content-between secondaryBg rounded">
              <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <img
                  src={selectedCard.image}
                  className="rounded"
                  style={{ width: "80px", aspectRatio: "1/1" }}
                />
                <div className="h-100 d-flex flex-column align-items-start justify-content-center gap-2">
                  <h5 className="fw-semibold fontPoppins mb-0">
                    {selectedCard.title}
                  </h5>
                  <p className="fontPoppins mb-0">Penanaman di Tanah - Pot</p>
                </div>
              </div>
              <div>
                <button onClick={refreshPage} className="fontPoppins primaryBg border-0 text-white px-5 py-1 rounded d-flex align-items-center justify-content-center">
                  Ubah
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="d-flex w-100 py-5 px-5 align-items-start justify-content-start mb-0">
          <h3 className="fontPoppins fw-semibold">Prediksi Tanggal Panen</h3>
        </div>
        <div className="w-100 d-flex px-5 mt-2 align-items-center justify-content-center">
          <div className="w-50 d-flex flex-row align-items-center justify-content-between secondaryBg py-3 px-5 rounded-3">
            <div className="d-flex flex-column align-items-end gap-2">
              <h5 className="mb-0 textPoppin fw-semibold">Tanggal Mulai</h5>
              <p className="mb-0 textPoppin">5 Jan 2024</p>
            </div>
            <img src={IconPlay} />
            <div className="d-flex flex-column align-items-start gap-2">
              <h5 className="mb-0 textPoppin fw-semibold">Prediksi Panen</h5>
              <p className="mb-0 textPoppin">28 - 29 Jan 2024</p>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex px-5 my-5 align-items-center justify-content-end">
          <button className="fontPoppins primaryBg border-0 text-white px-5 py-2 rounded d-flex align-items-center justify-content-center">
            Mulai
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AddPlant;
