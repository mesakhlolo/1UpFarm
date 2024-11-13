import React, { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import '../assets/styles/css/main.css';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      id="root"
      className="grayBg d-flex align-items-center justify-content-center"
      style={{ width: "78%", height: "100vh", fontFamily: 'Poppins, sans-serif', overflowY: "auto" }}
    >
      <div className="grayBg align-items-center justify-content-center d-flex">
        <Card style={{ width: '600px', margin: '20px',marginLeft: '-400px',marginTop: '-100px', fontFamily: 'Poppins, sans-serif' }}>
          <Card.Header style={{ backgroundColor: '#611599', color: '#fff', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>
            Kata sandi
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label className="font-weight-bold">Kata Sandi Baru</Form.Label>
                <Form.Control 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                  style={{ backgroundColor: '#f7f7f7', fontFamily: 'Poppins, sans-serif' }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className="font-weight-bold">Konfirmasi Kata Sandi Baru</Form.Label>
                <Form.Control 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  style={{ backgroundColor: '#f7f7f7', fontFamily: 'Poppins, sans-serif' }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <div style={{ position: 'absolute', bottom: '195px', right: '475px' }}>
          <Button variant="primary" type="button" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
