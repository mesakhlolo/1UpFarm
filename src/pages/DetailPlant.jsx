import React from "react";
import { Carousel, Card } from "react-bootstrap";
import Notif from "../components/Notif";
import AirBiruImg from "../assets/images/icons/Air-Biru.png";
import AirPutihImg from "../assets/images/icons/Air-Putih.png";
import SiramImg from "../assets/images/icons/Siram.png";
import MudahImg from "../assets/images/illustrations/mudah.png";
import JamImg from "../assets/images/icons/Jam.svg";
import FlagImg from "../assets/images/icons/Flag.svg";
import BaikImg from "../assets/images/icons/Baik.png";
import bawangImg from "../assets/images/icons/Bawang.png";
import step1Image from "../assets/images/detail-plant-images/step1.jpg";

const DetailPlant = () => {
  // Data dummy rekomendasi nutrisi
  const rekomendasiNutrisi = [
    {
      title: "Pupuk campuran",
      description: "Campuran kompos dari bahan organik",
      image: step1Image,
    },
    {
      title: "Pupuk organik",
      description: "Pupuk yang dibuat dari bahan alami",
      image: step1Image,
    },
    {
      title: "Pupuk cair",
      description: "Pupuk cair untuk pertumbuhan tanaman",
      image: step1Image,
    },
    {
      title: "Pupuk hijau",
      description: "Pupuk dari tanaman hijau",
      image: step1Image,
    },
  ];

  return (
    <main
      className="detail-plant flex-column align-items-start justify-content-start grayBg"
      style={{
        width: "78%",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}>
      {/* judul */}
      <div
        className="detail-plant d-flex p-5 align-items-center justify-content-center justify-content-between"
        style={{ width: "100%", height: "15vh" }}>
        <h1 className="fontPoppins fw-bold mb-0">Detail Tanaman</h1>
        <Notif />
      </div>

      <div className="mb-5 mx-5">
        {/* section detail tanaman */}
        <div className="card">
          <div className="card-body d-flex align-items-start">
            {/* Bagian Kiri - Gambar dan Tombol */}
            <div className="me-4 text-center" style={{ width: "200px" }}>
              <img
                alt="Leaf Icon"
                className="img-fluid"
                src={bawangImg}
                style={{ borderRadius: "10px" }}
                width="200"
              />
              <button
                className="btn btn-primary mt-3"
                style={{
                  width: "200px",
                  backgroundColor: "#661599",
                  border: "none",
                }}>
                Tanam sekarang
              </button>
            </div>

            {/* Bagian Tengah - Informasi Tanaman */}
            <div>
              <h2>Bayam</h2>
              <p>Penanaman di Tanah - Pot</p>
              <div className="d-flex mb-3" style={{ marginTop: "60px" }}>
                <div
                  className="d-inline-block p-3 rounded position-relative"
                  style={{ backgroundColor: "#fde6c5", textAlign: "center" }}>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    {/* Waktu Tanam */}
                    <div className="text-center">
                      <p className="fw-bold text-decoration-underline mb-1">
                        Waktu Tanam
                      </p>
                      <p className="mb-0">5 Jan 2022</p>
                    </div>
                    {/* Arrow */}
                    <div
                      style={{
                        fontSize: "18px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        fontWeight: "bold",
                      }}>
                      ▶
                    </div>
                    {/* Prediksi Panen */}
                    <div className="text-center">
                      <p className="fw-bold mb-1">Prediksi Panen</p>
                      <p className="mb-0">28-29 Jan 2022</p>
                    </div>
                  </div>
                  {/* Status Badge */}
                  <span
                    className="badge bg-warning text-dark position-absolute"
                    style={{
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "14px",
                      padding: "6px 12px",
                      borderRadius: "8px",
                    }}>
                    Status: Ongoing
                  </span>
                </div>
              </div>
            </div>

            {/* Bagian Kanan - Icon dan Bar */}
            <div className="ms-auto text-center">
              <h5
                style={{
                  marginBottom: "10px",
                  marginTop: "5px",
                  textAlign: "left",
                }}>
                Kondisi, Periode &amp; Frekuensi Siraman
              </h5>
              <div
                className="d-flex align-items-center"
                style={{ marginTop: "90px" }}>
                {/* Baik Condition Icon */}
                <img
                  alt="Kondisi Baik"
                  src={BaikImg}
                  style={{ width: "100px", marginRight: "15px" }}
                />
                <div>
                  {/* Weekly Progress Bar */}
                  <div className="d-flex align-items-center">
                    {/* Icon Jam */}
                    <img
                      alt="Jam Icon"
                      src={JamImg}
                      style={{ width: "45px", marginRight: "30px" }}
                    />

                    {/* Progress Bar dengan Checkpoint */}
                    <div
                      className="position-relative"
                      style={{ width: "250px", height: "30px" }}>
                      {/* Bar Background */}
                      <div
                        className="progress"
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#e9ecef",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}>
                        {/* Progress */}
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "35%", // Ubah persentase progress di sini (contoh: 50% = 2 checkpoint tercapai)
                            backgroundColor: "#28a745",
                          }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>

                      {/* Checkpoints */}
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className="position-absolute d-flex justify-content-center align-items-center"
                          style={{
                            top: "50%",
                            left: `${(index / 3) * 100}%`, 
                            transform: "translate(-50%, -50%)",
                            width: index === 3 ? "30px" : "20px",
                            height: index === 3 ? "30px" : "20px",
                            zIndex: 2,
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            border: index === 3 ? "none" : "2px solid #28a745",
                          }}>
                          {index === 3 ? (
                            // Gambar bendera di checkpoint terakhir
                            <img
                              alt="Finish Flag"
                              src={FlagImg}
                              style={{
                                width: "30px",
                                height: "30px",
                              }}
                            />
                          ) : (
                            // Teks checkpoint untuk 1w, 2w, 3w
                            <span
                              style={{
                                fontSize: "10px",
                                color: "#28a745",
                                fontWeight: "bold",
                              }}>
                              {index + 1}w
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Watering Frequency Levels */}
                  <div className="d-flex align-items-center mt-2">
                    {/* Icon Siram */}
                    <img
                      alt="Siram Icon"
                      src={SiramImg}
                      style={{ width: "60px", marginRight: "15px" }}
                    />
                    {/* Bar Air */}
                    <div
                      className="card d-flex flex-row px-3 py-1"
                      style={{ gap: "5px", backgroundColor: "#C1F1F1" }}>
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          alt={`Water Level ${index + 1}`}
                          src={index < 3 ? AirBiruImg : AirPutihImg} // Asumsikan level penyiramannya adalah 3
                          style={{ width: "20px" }}
                        />
                      ))}
                    </div>
                    <button
                      className="btn btn-info py-1 px-4"
                      style={{ marginLeft: "15px", borderRadius: "15px" }}>
                      Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="badge-container d-flex align-items-center justify-content-between p-3 mt-4"
          style={{
            border: "2px dashed #ccc",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
          {/* Bagian Kiri - Badge dan Deskripsi */}
          <div className="d-flex align-items-center">
            {/* Badge Icon */}
            <img
              alt="Badge Mudah"
              src={MudahImg}
              style={{
                width: "60px",
                height: "60px",
                marginRight: "15px",
              }}
            />
            {/* Deskripsi */}
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  margin: 0,
                }}>
                Badge Mudah
              </p>
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  color: "#555",
                }}>
                Selesaikan tugas untuk mendapatkan lencana ini.
              </p>
            </div>
          </div>

          {/* Bagian Kanan - Tombol */}
          <button
            className="btn"
            style={{
              backgroundColor: "#6A0DAD",
              color: "#fff",
              borderRadius: "20px",
              padding: "8px 20px",
              fontWeight: "bold",
              border: "none",
            }}>
            Ambil
          </button>
        </div>

        {/* Langkah Awal */}
        <div className="mt-5">
          <h3 className="fontPoppins fw-bold mb-4">Langkah Awal</h3>
          <Carousel indicators={true} interval={3000} controls={true}>
            {/* Slide 1 */}
            <Carousel.Item>
              <div className="card p-3">
                <img
                  src={step1Image}
                  className="carousel-img img-fluid rounded"
                  alt="Step 1"
                />
                <h5 className="fontPoppins fw-bold mt-3">
                  Step 1: Persiapan Pot Tanam
                </h5>
                <p>
                  Gunakan pot dengan diameter minimal 20-30 cm dan kedalaman
                  sekitar 15-20 cm. Pastikan pot memiliki lubang drainase di
                  bagian bawah untuk menghindari air tergenang.
                </p>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div className="card p-3">
                <img
                  src={step1Image}
                  className="carousel-img img-fluid rounded"
                  alt="Step 2"
                />
                <h5 className="fontPoppins fw-bold mt-3">
                  Step 2: Pemilihan Bibit
                </h5>
                <p>
                  Pilih bibit berkualitas untuk memastikan pertumbuhan tanaman
                  yang optimal. Bibit yang sehat akan meningkatkan peluang
                  keberhasilan.
                </p>
              </div>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <div className="card p-3">
                <img
                  src={step1Image}
                  className="carousel-img img-fluid rounded"
                  alt="Step 3"
                />
                <h5 className="fontPoppins fw-bold mt-3">Step 3: Penanaman</h5>
                <p>
                  Tanam bibit pada media tanam yang telah dipersiapkan, lalu
                  siram secara merata untuk menjaga kelembaban tanah.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Rekomendasi Nutrisi */}
        <div className="mt-5">
          <h3 className="fontPoppins fw-bold">Rekomendasi Nutrisi</h3>
          <Carousel
            indicators={false}
            interval={null}
            prevLabel=""
            nextLabel=""
            className="mt-3">
            {/* Membagi item menjadi beberapa slide */}
            {rekomendasiNutrisi.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-start gap-4">
                  {rekomendasiNutrisi
                    .slice(index, index + 3)
                    .map((nutrisi, idx) => (
                      <Card
                        key={idx}
                        style={{ width: "18rem" }}
                        className="shadow-sm">
                        <Card.Img
                          variant="top"
                          src={nutrisi.image}
                          alt={nutrisi.title}
                        />
                        <Card.Body>
                          <Card.Title>{nutrisi.title}</Card.Title>
                          <Card.Text>{nutrisi.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default DetailPlant;
