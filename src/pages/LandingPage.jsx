import "@fontsource/poppins";
import React from "react";
import LogoImg from "../assets/images/logo1.png";
import AppImg from "../assets/images/app.png";
import BingungImg from "../assets/images/bingung.png";
import HasilImg from "../assets/images/hasil.png";
import HidroImg from "../assets/images/hidro.png";
import LacakImg from "../assets/images/lacak.png";
import MaskotImg from "../assets/images/maskot.png";
import NanamImg from "../assets/images/nanam.png";
import ProfilImg from "../assets/images/profil.png";
import SenyumImg from "../assets/images/senyum.png";
import TambahImg from "../assets/images/tambah.png";
import Ig from "../assets/images/icons/ig.svg";
import Ps from "../assets/images/icons/ps.svg";
import Twitter from "../assets/images/icons/twitter.svg";
import Yt from "../assets/images/icons/yt.svg";
import "../assets/styles/css/landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <img src={LogoImg} alt="logo" />
        <nav>
          <a href="#beranda">Beranda</a>
          <a href="#cara-kerja">Cara Kerja</a>
          <a href="#fitur">Fitur</a>
          <a href="#panen">Panen</a>
          <a href="#download">Download</a>
        </nav>
        <div className="cta">
          <a href="/login">Masuk</a>
          <a href="/register">Daftar</a>
        </div>
      </header>

      <section id="beranda" className="hero">
        <div className="text ">
          <h1 className="fw-bold">
            Mainkan Tantangan Bertani, Panen Kesenangan!
          </h1>
          <p>
            Tanam dan panen hasilnya, kumpulkan poin sambil belajar merawat
            lingkungan. Ayo, raih kesenangan, buat kotamu lebih hijau!
          </p>
          <a href="/login">Mulai tanam</a>
        </div>
        <img
          src={MaskotImg}
          alt="Illustration of a happy plant character"
          height="300"
          width="300"
        />
      </section>

      <section id="cara-kerja" className="section" style={{ backgroundColor: "#661599" }}>
        <h2 className="fw-bold">Cara Kerja</h2>
        <div className="cards">
          <div className="card text-bg-light">
            <img src={NanamImg} alt="Illustration of planting seeds" />
            <h3>Tanam Bibit Pilihan</h3>
          </div>
          <div className="card text-bg-light">
            <img src={HidroImg} alt="Illustration of completing daily tasks" />
            <h3>Kerjakan Tugas Harian</h3>
          </div>
          <div className="card text-bg-light">
            <img src={HasilImg} alt="Illustration of harvesting crops" />
            <h3>Panen Hasil Terbaik</h3>
          </div>
        </div>
      </section>

      <section id="fitur" className="feature-container">
        <div className="feature-title fw-bold">Fitur</div>
        <div className="content">
          <div className="features">
            <div className="feature-row">
              <div className="feature">
                <h3>Lacak Tanaman</h3>
                <p>
                  Monitoring tanaman yang sedang kamu tanam setiap harinya
                  dengan cara yang asyik dan mudah.
                </p>
                <img src={LacakImg} alt="Lacak Tanaman" />
                <div className="hover-text">
                  <h3>Lacak Tanaman</h3>
                  <p>
                    Monitoring tanaman yang sedang kamu tanam setiap harinya
                    dengan cara yang asyik dan mudah.
                  </p>
                  <p>
                    Fitur "Lacak Tanaman" di aplikasi 1UPFarm ini tanaman kamu
                    ditampilkan nama dan gambar tanaman, serta status tanaman
                    ini, seperti "Aktif" atau "Selesai".
                  </p>
                  <p>
                    Dilengkapi dengan fitur pencarian yang memudahkan kamu
                    mencari berdasarkan tingkat kesulitan atau lencana yang akan
                    didapatkan.
                  </p>
                </div>
              </div>
              <div className="feature">
                <h3>Tugas Harian</h3>
                <p>
                  Selesaikan tugas-tugas perawatan tiap harinya. Tingkatkan
                  level dengan raih exp dan gold.
                </p>
                <img src={HidroImg} alt="Tugas Harian" />
                <div className="hover-text">
                  <h3>Tugas Harian</h3>
                  <p>
                    Selesaikan tugas-tugas perawatan tiap harinya. Tingkatkan
                    level dengan raih exp dan gold.
                  </p>
                  <p>
                    Setiap tanaman memiliki daftar tugas spesifik seperti "Siram
                    Tanaman" atau "Pemberian Pupuk," lengkap dengan poin
                    pengalaman (EXP) atau gold sebagai reward.
                  </p>
                  <p>
                    Selain daftar tugas aktif, ada bagian "Tugas Selesai" yang
                    menampilkan tugas yang sudah diselesaikan, memberikan rasa
                    pencapaian.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature">
                <h3>Tambah Tanaman</h3>
                <p>Mulai menanam dengan cara yang praktis dan mudah!</p>
                <img src={TambahImg} alt="Tambah Tanaman" />
                <div className="hover-text">
                  <h3>Tambah Tanaman</h3>
                  <p>Mulai menanam dengan cara yang praktis dan mudah!</p>
                  <p>
                    Pengguna dapat mulai menanam dengan menyesuaikan budget &
                    lahan agar hasilnya optimal, seperti memilih media tanam
                    yang diinginkan dan metode penanaman.
                  </p>
                  <p>
                    Di bagian bawah, ada daftar tanaman yang, disertai fitur
                    pencarian untuk cepat menemukan tanaman spesifik.
                  </p>
                </div>
              </div>
              <div className="feature">
                <h3>Profil</h3>
                <p>
                  Dengan tampilan yang interaktif, pengguna bisa terus
                  termotivasi dalam merawat kebunnya.
                </p>
                <img src={ProfilImg} alt="profil" />
                <div className="hover-text">
                  <h3>Profil</h3>
                  <p>
                    Dengan tampilan yang interaktif, pengguna bisa terus
                    termotivasi dalam merawat kebunnya.
                  </p>
                  <p>
                    Fitur "Profile" di 1UPFarm menunjukkan info pengguna seperti
                    level, lencana, dan progress harian.
                  </p>
                  <p>
                    Bagian notifikasi memberikan pengingat tugas dan update
                    aktivitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="preferences">
            <img src={BingungImg} alt="bawang bingung" />
          </div>
        </div>
      </section>

      <section id="panen" className="harvest">
        <img
          src={SenyumImg}
          alt="Illustration of a person harvesting crops"
          width="250"
        />
        <div className="text">
          <h2>Waktunya Panen</h2>
          <p>
            Hasil berkebun tomat selama 1 bulan.{" "}
            <span style={{ color: "#FFD700" }}>Tingkatkan</span> selalu
            tanamannya dan raih lencana kamu hingga level tertinggi.
          </p>
        </div>
      </section>

      <section id="download" className="download">
        <div className="text-content">
          <h1>Menanam dengan cara yang menyenangkan</h1>
          <p>
            Semua keunggulan yang Anda sukai di website kini ada dalam aplikasi.
            Bawa kemudahan ini ke dalam genggaman Anda dan rasakan fleksibilitas
            lebih.
          </p>
          <a href="#" className="google-play-button">
            <img src={Ps} alt="icon" />
            <span style={{ color: "#661599" }}>Google Play</span>
          </a>
        </div>
        <div className="image-content">
          <img src={AppImg} alt="Aplikasi" />
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="logo">
            <img src={MaskotImg} alt="Maskot" />
            <div className="description">
              <h1 className="text-light mt-5 fw-bold">1UPFarm</h1>
              <p>Mainkan Tantangan Bertani, Panen Kesenangan!</p>
            </div>
          </div>
          <div className="column">
            <h3 className="text-light fw-bold">Fitur</h3>
            <ul>
              <li>
                <a href="#fitur">Cara Kerja</a>
              </li>
              <li>
                <a href="#tujuan">Tugas Harian</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="text-light fw-bold">Produk</h3>
            <ul>
              <li>
                <a href="#cara-kerja">Aplikasi Website</a>
              </li>
              <li>
                <a href="#android">Aplikasi Android</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="text-light fw-bold">Dukung</h3>
            <ul>
              <li>
                <a href="#masukan">Masukan</a>
              </li>
              <li>
                <a href="#bug">Laporan Bug</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <img src={Ig} className="" width="32" height="32" alt="logo" />
          </a>
          <a href="#">
            <img src={Yt} className="" width="32" height="32" alt="logo" />
          </a>
          <a href="#">
            <img src={Twitter} className="" width="32" height="32" alt="logo" />
          </a>
        </div>
        <div className="bottom-bar">
          2024 1UpFarm. All right serves.
          <a href="#security">Security</a> | <a href="#privacy">Privacy</a> |{" "}
          <a href="#terms">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
