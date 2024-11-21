import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands } from '@fortawesome/free-solid-svg-icons';
import LogooImg from '../assets/images/icons/Logo-1UPFarm-ungu.svg';
import { useNavigate } from 'react-router-dom'; 

const LoginAccount = () => {
    const navigate = useNavigate(); 
    const handleLoginSubmit = (e) => {
        e.preventDefault(); 
        navigate('/dashboard/profile');
    };

    return (
        <Container fluid className="vh-100 d-flex align-items-center bg-light">
            <Row className="h-100 w-100">
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <img
                        src={LogooImg}
                        alt="Logo"
                        style={{
                            maxWidth: '200px',
                            maxHeight: '200px',
                            transform: 'translateX(100px)' 
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
                        transform: 'translateX(300px)',
                    }}
                >
                    <h2 className="mb-3 text-center pb-5" style={{ marginTop: '30px', fontWeight: 'bold', color: '#661599', fontSize: '40px' }}>
                        Selamat Datang <FontAwesomeIcon icon={faHands} style={{ color: "#3a0b75" }} />
                    </h2>
                    <Form className="w-100" onSubmit={handleLoginSubmit}> 
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label className="text-purple">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan E-mail" />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label className="text-purple">Kata Sandi</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan Kata Sandi" />
                        </Form.Group>
                        <div className="mt-1 text-end pb-4">
                            <a href="/dashboard/change-password" style={{ color: '#661599', textDecoration: 'none' }}> 
                                Lupa Kata Sandi
                            </a>
                        </div>
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
                                    border: 'none'
                                }}
                                onClick={() => navigate('/dashboard/profile')}
                                >
                                Masuk
                            </Button>
                        </div>
                        <div className="mt-1 text-center pt-3">
                            <p>Belum Punya Akun? <a href="/register" className="text-purple" style={{ color: '#661599', fontWeight: 'bold' }}>Daftar</a></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginAccount;
