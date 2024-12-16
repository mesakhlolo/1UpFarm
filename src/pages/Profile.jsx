import React, { useEffect, useState } from "react";
import Tomat from "../assets/images/illustrations/tomat.png";
import Cabai from "../assets/images/illustrations/cabai.png";
import Bayam from "../assets/images/illustrations/Bayam.png";
import DaunBawang from "../assets/images/illustrations/Daun Bawang.png";
import Badge from "../components/Badge";
import Male from "../assets/images/illustrations/Male.png";
import Maskot from "../assets/images/maskot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faCoins,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Profile = () => {
  const [name, setName] = useState("")

  useEffect (() => {
    setName (JSON.parse(sessionStorage.getItem("user")).name)
  }, [])
  return (
    <div className="profile grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "hidden", 
      }}>
      <div className="content">
        <div className="row">
          {/* Profile and Badges Column - Left Side */}
          <div className="col-md-6">
            <div className="progress-card mb-2" style={{ backgroundColor: "#fff" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold" style={{ color: "#611599" }}>
                    {name}!
                  </h4>
                  <h5>Capai Progress kamu Hari Ini!</h5>
                  <br />
                  <a href="/dashboard/detail-plant">
                  <button className="btn-purple">Detail</button>
                  </a>
                </div>
                <img
                  alt="Progress Image"
                  height="150"
                  src={Maskot}
                  width="140"
                  style={{ marginRight: "-10px" }}
                />
              </div>
            </div>

            {/* Profile Section */}
            <div className="profile-card mb-2">
              <h5>Profil</h5>
              <div className="d-flex align-items-center">
                <img alt="Profile Image" height="130" src={Male} width="100" />
                <div>
                  <div className="d-flex align-items-center card-heart">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-danger icon-heart"
                    />
                    <div className="progress-long-heart">
                      <div
                        className="progress-short-heart"
                        style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2 card-star">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-primary icon-star"
                    />
                    <div className="progress-long-star">
                      <div
                        className="progress-short-star"
                        style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <p className="mt-2 card-coin">
                    <FontAwesomeIcon
                      icon={faCoins}
                      className="text-warning icon-coins"
                    />
                    <span className="text-coins">1000</span>
                  </p>
                </div>
              </div>
            </div>
          <Badge />
          </div>

          {/* Carousel and Notifications Column - Right Side */}
          <div
            className="col-md-6"
            style={{ position: "relative", left: "10px" }}>
            {" "}
            {/* Carousel Section */}
            <div className="start-planting-card text-center position-relative mb-3">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Tomat}
                      className="mulai-img rounded-4 d-block w-100"
                      alt="Tomat"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Cabai}
                      className="mulai-img rounded-4 d-block w-100"
                      alt="Cabai"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Bayam}
                      className="mulai-img rounded-4 d-block w-100"
                      alt="Bayam"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <button className="btn-purple mt-3">Mulai Tanam</button>
            </div>
            {/* Notifications Section */}
            <div
              className="notification-card"
              style={{
                backgroundColor: "#661599",
                padding: "15px",
                borderRadius: "8px",
              }}>
              <h5 style={{ color: "#661599" }}> <strong>Pemberitahuan</strong> </h5>
              <div className="notif">
                <div
                  className="notif-body"
                  style={{
                    backgroundColor: "#661599",
                    padding: "10px",
                    borderRadius: "8px",
                  }}>
                  <img
                    alt="Notification Image 1"
                    className="me-3"
                    height="50"
                    src={Bayam}
                    width="50"
                  />
                  <div>
                    <p>Jangan lupa untuk menyiram tanaman hari ini</p>
                    <small>Bayam - 1 Minggu</small>
                  </div>
                </div>
                <div
                  className="notif-body"
                  style={{
                    backgroundColor: "#661599",
                    padding: "10px",
                    borderRadius: "8px",
                  }}>
                  <img
                    alt="Notification Image 2"
                    className="me-3"
                    height="50"
                    src={DaunBawang}
                    width="50"
                  />
                  <div>
                    <p>Jangan lupa untuk menyiram tanaman hari ini</p>
                    <small>Daun Bawang - 1 Minggu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
