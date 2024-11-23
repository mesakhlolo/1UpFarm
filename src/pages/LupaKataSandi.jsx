import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'; // Ikon untuk 'Lupa Kata Sandi'
import LogooImg from '../assets/images/icons/Logo-1UPFarm-ungu.svg'; // Ganti dengan path logo Anda
import "../assets/styles/css/main.css";

const LupaKataSandi = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirim permintaan reset kata sandi
    console.log("Permintaan reset kata sandi dikirim ke:", email);
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="h-100 w-100">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={LogooImg}
            alt="Logo"
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
            }}
          />
        </Col>

        <Col
          md={5}
          className="d-flex flex-column justify-content-center align-items-center px-4 form-container"
          style={{
            backgroundColor: '#E5DCFC',
            height: '85%',
            marginTop: '70px',
            borderRadius: '20px',
          }}
        >
          <h2 className="mb-3 text-center pb-5" style={{ marginTop: '30px', fontWeight: 'bold', color: '#661599', fontSize: '40px' }}>
            Lupa Kata Sandi <FontAwesomeIcon icon={faUnlockAlt} style={{ color: "#3a0b75" }} />
          </h2>
          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="text-purple">E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#f7f7f7",
                  fontFamily: "Poppins, sans-serif",
                }}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                type="submit"
                className="px-4 py-3 w-75"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  backgroundColor: '#661599',
                  color: 'white',
                  border: 'none',
                }}
              >
                Kirim Permintaan Reset
              </Button>
            </div>
            <div className="mt-3 text-center">
              <p>Kembali ke halaman <a href="/login" className="text-purple" style={{ color: '#661599', fontWeight: 'bold' }}>Masuk</a></p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LupaKataSandi;