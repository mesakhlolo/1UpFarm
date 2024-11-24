import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "../assets/styles/css/main.css";
import AleryIcon from "../assets/images/icons/aleryicon.svg";

const GantiSandi = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    if (newPassword && newPassword === confirmPassword) {
      setShowAlert(true); 
      setTimeout(() => setShowAlert(false), 3000); 
    } else {
      alert("Kata sandi tidak cocok!"); 
    }
  };

  return (
    <div
      id="root"
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "200px",
      }}
    >
      <div className="grayBg align-items-center justify-content-center d-flex detail-profile-container">
        <Card
          style={{
            width: "600px",
            margin: "20px",
            fontFamily: "Poppins, sans-serif",
            marginTop: "70px",
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
            Kata Sandi
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label className="font-weight-bold">
                  Kata Sandi Baru
                </Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    backgroundColor: "#f7f7f7",
                    fontFamily: "Poppins, sans-serif",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className="font-weight-bold">
                  Konfirmasi Kata Sandi Baru
                </Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    backgroundColor: "#f7f7f7",
                    fontFamily: "Poppins, sans-serif",
                  }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <div style={{ position: "absolute", bottom: "195px", right: "475px" }}>
          <Button
            variant="primary"
            type="button"
            className="button-confirm"
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
            alt="Alery1"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
            Password anda berhasil diubah
          </span>
        </Alert>
      )}
    </div>
  );
};

export default GantiSandi;
