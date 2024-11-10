import { Carousel, Card } from "react-bootstrap";
import Notif from "../components/Notif";
import step1Image from "../assets/images/detail-plant-images/step1.jpg";
import "../assets/styles/css/detail-plant.css";

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
      className="flex-column align-items-start justify-content-start grayBg"
      style={{
        width: "78%",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* judul */}
      <div
        className="d-flex p-5 align-items-center justify-content-center justify-content-between"
        style={{ width: "100%", height: "15vh" }}
      >
        <h1 className="fontPoppins fw-bold mb-0">Detail Tanaman</h1>
        <Notif />
      </div>

      <div className="mb-5 mx-5">
        {/* section detail tanaman */}
        <div>
          <h4>on progress</h4>
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
            className="mt-3"
          >
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
                        className="shadow-sm"
                      >
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
