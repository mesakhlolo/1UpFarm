import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/css/main.css";
import AleryIcon from "../assets/images/icons/aleryicon.svg"; 

const DetailProfil = () => {
  const [name, setName] = useState("Zacky");
  const [username, setUsername] = useState("Zacky");
  const [email, setEmail] = useState("zacky123@gmail.com");
  const [showAlert, setShowAlert] = useState(false); 

  const handleConfirm = () => {
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div
      id="root"
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "350px",
      }}
    >
      <div className="grayBg align-items-center justify-content-center d-flex detail-profil-container">
        <Card
          style={{
            width: "600px",
            margin: "20px",
            fontFamily: "Poppins, sans-serif",
            marginTop: "70px"
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#611599",
              color: "#fff",
              textAlign: "left",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Detail
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="font-weight-bold">Nama</Form.Label>
                <div style={{ position: "relative" }}>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label className="font-weight-bold">Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        {/* Tombol Konfirmasi */}
        <Button
          variant="primary"
          type="button"
          className="confirm-button"
          style={{
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "#611599",
            border: "none",
          }}
          onClick={handleConfirm} 
        >
          Konfirmasi
        </Button>
      </div>

      {/* Alert untuk notifikasi */}
      {showAlert && (
  <Alert
    variant="success"
    style={{
      position: "fixed",
      top: "20px", // Tetap di tengah atas
      left: "50%",
      transform: "translateX(-50%)",
      width: "800px", 
      height: "40px", 
      backgroundColor: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "5px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      zIndex: 1000,
    }}
        >
          <img
            src={AleryIcon} 
            alt="Custom Check"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
              Nama anda berhasil diubah
          </span>
  </Alert>
      )}
    </div>
  );
};

export default DetailProfil;
