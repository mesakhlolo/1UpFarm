import React, { useState } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import PlacetoPlant from "../assets/images/illustrations/tempat-penanaman.png";
import PlantinginGround from "../assets/images/tanah.png";
import PlantinginHydroponics from "../assets/images/hidroponik.png";
import MethodPlant from "../assets/images/illustrations/Metode-Penanaman.png";
import MethodPot from "../assets/images/pot.png";
import MethodPolybag from "../assets/images/polybag.png";
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
import IconPlay from "../assets/images/icons/Play.svg";
import Notif from "../components/Notif";
import "../assets/styles/css/AddPlant.css";

const AddPlant = () => {
  const placeToPlant = [
    {
      id: 1,
      title: "Penanaman di Tanah",
      description:
        "Menanam menggunakan tanah memberikan akar tanaman akses langsung pada unsur hara alami.",
      image: PlantinginGround,
    },
    {
      id: 2,
      title: "Hidroponik",
      description:
        "Cara menanam menggunakan media air untuk menjadi media tanam.",
      image: PlantinginHydroponics,
    },
  ];

  const methodToPlant = [
    {
      id: 1,
      title: "Pot",
      description:
        "Cara menanam tanaman dalam wadah pot. Pot bisa diletakkan di mana saja, sangat fleksibel.",
      image: MethodPot,
    },
    {
      id: 2,
      title: "Polybag",
      description:
        "Metode menanam dalam kantong plastik, polybag menjadi media tanam praktis diruang terbatas.",
      image: MethodPolybag,
    },
  ];

  const plants = [
    {
      id: 1,
      title: "Bawang Merah",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: BawangMerah,
    },
    {
      id: 2,
      title: "Bawang Putih",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: BawangPutih,
    },
    {
      id: 3,
      title: "Bayam",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Bayam,
    },
    {
      id: 4,
      title: "Brokoli",
      mastery: "Mudah",
      difficulty: BadgeEasy,
      image: Brokoli,
    },
    {
      id: 5,
      title: "Cabai",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Cabai,
    },
    {
      id: 6,
      title: "Daun Bawang",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: DaunBawang,
    },
    {
      id: 7,
      title: "Sawi",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Sawi,
    },
    {
      id: 8,
      title: "Selada",
      mastery: "Sedang",
      difficulty: BadgeMedium,
      image: Selada,
    },
    {
      id: 9,
      title: "Semangka",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Semangka,
    },
    {
      id: 10,
      title: "Terong",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Terong,
    },
    {
      id: 11,
      title: "Toge",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Toge,
    },
    {
      id: 12,
      title: "Tomat",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Tomat,
    },
    {
      id: 13,
      title: "Wortel",
      mastery: "Susah",
      difficulty: BadgeHard,
      image: Wortel,
    },
  ];

  const [selectedCardPlace, setSelectedCardPlace] = useState(null);
  const [selectedCardMethod, setSelectedCardMethod] = useState(null);
  const [selectedCardPlant, setSelectedCardPlant] = useState(null);

  const handleSelectPlace = (item) => {
    setSelectedCardPlace(item);
  };
  const handleSelectMethod = (item) => {
    setSelectedCardMethod(item);
  };
  const handleSelectPlant = (item) => {
    setSelectedCardPlant(item);
  };

  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <div
      id="root"
      className="grayBg d-flex flex-column align-items-start justify-content-start"
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
        {/* Pilih Tempat Penanaman */}
        <div className="d-flex pt-4 px-5 align-items-center justify-content-start mb-0">
          <h3 className="fontPoppins fw-bold">Dimana Kamu Ingin Menanam?</h3>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-center w-100 p-5 gap-5"
          style={{ marginBottom: "70px", marginTop: "40px" }}
        >
          <div
            className="p-1 d-flex align-items-start justify-content-start"
            style={{ width: "50%" }}
          >
            <div className="d-flex flex-column align-items-start">
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  scale: "1.2",
                }}
              >
                <Card
                  className="bg-white px-1 pt-1 rounded-top-3 rounded-0 border-0"
                  style={{ width: "80%" }}
                >
                  <Image
                    className="rounded-top-3"
                    src={PlacetoPlant}
                    style={{ width: "100%" }}
                  />
                </Card>
                <Card
                  className="bg-white rounded border-0"
                  style={{ width: "83%", height: "25px" }}
                ></Card>
              </div>
            </div>
          </div>
          <div className="w-50 d-flex flex-column align-items-end justify-content-center gap-5">
            {placeToPlant.map((item) => (
              <div key={item.id}>
                <Card
                  className={`selection-card ${
                    selectedCardPlace && selectedCardPlace.id === item.id
                      ? "active"
                      : "hovercard"
                  }`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#EBE9FF",
                    width: "95%",
                  }}
                  onClick={() => handleSelectPlace(item)}
                >
                  <Card.Body className="ps-0 d-flex">
                    <div className="d-flex flex-row align-items-center position-relative">
                      <div
                        className={
                          "d-flex align-items-center justify-content-center position-absolute"
                        }
                        style={{
                          width: "100px",
                          left: "-50px",
                        }}
                      >
                        <Card.Img
                          className="p-2"
                          style={{
                            aspectRatio: "1/1",
                            objectFit: "contain",
                            backgroundColor: "#EBE9FF",
                            borderRadius: "50%",
                            scale: "1.5",
                          }}
                          src={item.image}
                        />
                      </div>
                      <div
                        className="d-flex flex-column align-items-start justify-content-center"
                        style={{ paddingLeft: "80px" }}
                      >
                        <Card.Title
                          className="fw-semibold w-100 mb-1 fontPoppins"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="mb-0 w-100 fontPoppins"
                          style={{ textAlign: "justify" }}
                        >
                          {item.description}
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
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
        {/* Pilih Metode Penanaman */}
        <div className="d-flex pt-4 px-5 align-items-center justify-content-start mb-0">
          <h3 className="fontPoppins fw-bold">
            Metode yang ingin kamu gunakan?
          </h3>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-center w-100 p-5 gap-5"
          style={{ marginBottom: "70px", marginTop: "40px" }}
        >
          <div
            className="p-1 d-flex align-items-start justify-content-start"
            style={{ width: "50%" }}
          >
            <div className="d-flex flex-column align-items-start">
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  scale: "1.2",
                }}
              >
                <Card
                  className="bg-white px-1 pt-1 rounded-top-3 rounded-0 border-0"
                  style={{ width: "80%" }}
                >
                  <Image
                    className="rounded-top-3"
                    src={MethodPlant}
                    style={{ width: "100%" }}
                  />
                </Card>
                <Card
                  className="bg-white rounded border-0"
                  style={{ width: "83%", height: "25px" }}
                ></Card>
              </div>
            </div>
          </div>
          <div className="w-50 d-flex flex-column align-items-end justify-content-center gap-5">
            {methodToPlant.map((item) => (
              <div key={item.id}>
                <Card
                  className={`selection-card ${
                    selectedCardMethod && selectedCardMethod.id === item.id
                      ? "active"
                      : "hovercard"
                  }`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#EBE9FF",
                    width: "95%",
                  }}
                  onClick={() => handleSelectMethod(item)}
                >
                  <Card.Body className="ps-0 d-flex">
                    <div className="d-flex flex-row align-items-center position-relative">
                      <div
                        className={
                          "d-flex align-items-center justify-content-center position-absolute"
                        }
                        style={{
                          width: "100px",
                          left: "-50px",
                        }}
                      >
                        <Card.Img
                          className="p-2"
                          style={{
                            aspectRatio: "1/1",
                            objectFit: "contain",
                            backgroundColor: "#EBE9FF",
                            borderRadius: "50%",
                            scale: "1.5",
                          }}
                          src={item.image}
                        />
                      </div>
                      <div
                        className="d-flex flex-column align-items-start justify-content-center"
                        style={{ paddingLeft: "80px" }}
                      >
                        <Card.Title
                          className="fw-semibold w-100 mb-1 fontPoppins"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="mb-0 w-100 fontPoppins"
                          style={{ textAlign: "justify" }}
                        >
                          {item.description}
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
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
        {/* Pilih Tanaman */}
        <div className="w-100 d-flex flex-column gap-4 align-items-center">
          <div className="d-flex w-100 py-3 px-5 align-items-start justify-content-start mb-0">
            <h3 className="fontPoppins fw-semibold">Pilih Tanamanmu!</h3>
          </div>
          <Container
            fluid
            className="w-100 px-5 d-flex flex-wrap flex-row gap- align-items-center justify-content-center mb-5"
          >
            <Row className="gy-3">
              {selectedCardPlace && selectedCardMethod ? (
                plants.map((item) => (
                  <Col xs={6} md={40} lg={3} key={item.id}>
                    <Card
                      className={`selection-card ${
                        selectedCardPlant && selectedCardPlant.id === item.id
                          ? "active"
                          : "hovercard"
                      }`}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#EBE9FF",
                        aspectRatio: "4/5",
                      }}
                      onClick={() => handleSelectPlant(item)}
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
                          <Card.Subtitle className="mb-0 text-muted d-flex align-items-center justify-content-center">
                            <Card.Img
                              style={{ width: "45px", aspectRatio: "1/1" }}
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
                ))
              ) : (
                <div className="text-center w-100">
                  <h5 className="text-muted">
                    Silakan pilih tempat dan metode menanam terlebih dahulu!
                  </h5>
                </div>
              )}
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
          {selectedCardPlace && selectedCardMethod && selectedCardPlant && (
            <div className="selection-result m-0 w-75 d-flex flex-row p-3 pe-5 mt-3 align-items-center justify-content-between secondaryBg rounded-4">
              <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <img
                  src={selectedCardPlant.image}
                  className="rounded"
                  style={{ width: "90px", aspectRatio: "1/1" }}
                />
                <div className="h-100 d-flex flex-column align-items-start justify-content-center gap-2">
                  <h5 className="fw-semibold fontPoppins mb-0">
                    {selectedCardPlant.title}
                  </h5>
                  <p className="fontPoppins mb-0">
                    {selectedCardPlace.title} - {selectedCardMethod.title}
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
