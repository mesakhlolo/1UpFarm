import Notif from "../components/Notif";

const DetailPlant = () => {
  return (
    // pembungkus utama
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
        {/* container box detail tanaman */}
        {/* langkah awal */}
        <div>
          <h3 className="fontPoppins fw-bold">Langkah Awal</h3>
        </div>
        {/* rekomendasi nutrisi */}
        <div>
          <h3 className="fontPoppins fw-bold">Rekomendasi Nutrisi</h3>
        </div>
      </div>
    </main>
  );
};

export default DetailPlant;
