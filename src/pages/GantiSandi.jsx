import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../assets/styles/css/main.css";

const GantiSandi = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div 
      id="root" 
      className="add-plant grayBg d-flex flex-column align-items-start justify-content-start"
      style={{
        width: "calc(100% - 250px)",
        height: "100vh",
        overflowY: "auto",
        marginLeft: "200px"
      }}>
      <div className="grayBg align-items-center justify-content-center d-flex detail-profile-container">
        <Card
          style={{
            width: "600px",
            margin: "20px",
            fontFamily: "Poppins, sans-serif",
          }}>
          <Card.Header
            style={{
              backgroundColor: "#611599",
              color: "#fff",
              textAlign: "left",
              fontFamily: "Poppins, sans-serif",
            }}>
            Kata sandi
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
            }}>
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GantiSandi;
