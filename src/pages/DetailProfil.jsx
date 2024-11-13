import React, { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/css/main.css'; 

const DetailProfil = () => {
  const [name, setName] = useState("Zacky");
  const [username, setUsername] = useState("Zacky");
  const [email, setEmail] = useState("zacky123@gmail.com");

  return (
    <div
      id="root"
      className="grayBg d-flex align-items-center justify-content-center"
      style={{ width: "78%", height: "100vh", fontFamily: 'Poppins, sans-serif', overflowY: "auto" }}
    >
      <div className="grayBg align-items-center justify-content-center d-flex">
        <Card style={{ width: '600px', margin: '20px', marginLeft: '-400px', marginTop: '-100px', fontFamily: 'Poppins, sans-serif' }}>
          <Card.Header style={{ backgroundColor: '#611599', color: '#fff', textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>
            Detail
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="font-weight-bold">Nama</Form.Label>
                <div style={{ position: 'relative' }}>
                  <Form.Control 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                  <FontAwesomeIcon 
                    icon={faPen} 
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} 
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label className="font-weight-bold">Username</Form.Label>
                <Form.Control 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <div style={{ position: 'absolute', bottom: '140px', right: '470px',}}>
          <Button variant="primary" type="button" style={{ fontFamily: 'Poppins, sans-serif' }}> 
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailProfil;