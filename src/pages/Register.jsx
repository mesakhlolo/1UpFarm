import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import LogooImg from '../assets/images/icons/Logo-1UPFarm-ungu.svg';
import '../assets/styles/css/register.css';

function CreateAccount() {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigate = useNavigate();

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault(); 
        navigate('/login'); 
    };

    return (
        <Container fluid className="vh-100 d-flex align-items-center bg-light">
            <Row className="h-100 w-100">
                {/* Kolom pertama dengan gambar */}
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
                    <h2 className="mb-3 text-center pb-3" style={{ marginTop: '30px', fontWeight: 'bold', color: '#661599', fontSize: '40px' }}>
                        Daftar Sekarang <FontAwesomeIcon icon={faPencil} style={{ color: "#3a0b75" }} />
                    </h2>
                    <Form className="w-100" onSubmit={handleLoginSubmit}> 
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label className="text-purple">Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label className="text-purple">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan E-mail" />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label className="text-purple">Kata Sandi</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan Kata Sandi" />
                        </Form.Group>

                        <Form.Group controlId="formGender" className="mb-3">
                            <Form.Label className="text-purple">Jenis Kelamin</Form.Label>
                            <div className="d-flex gap-3">
                                <div className="text-center">
                                    <Image
                                        src={LogooImg}
                                        onClick={() => handleGenderSelect('male')}
                                        className={`gender-option ${selectedGender === 'male' ? 'selected' : ''}`}
                                        alt="Male"
                                        width={50}
                                        height={50}
                                        roundedCircle
                                    />
                                    <div className="text-purple">Pria</div>
                                </div>
                                <div className="text-center">
                                    <Image
                                        src={LogooImg}
                                        onClick={() => handleGenderSelect('female')}
                                        className={`gender-option ${selectedGender === 'female' ? 'selected' : ''}`}
                                        alt="Female"
                                        width={50}
                                        height={50}
                                        roundedCircle
                                    />
                                    <div className="text-purple">Wanita</div>
                                </div>
                            </div>
                        </Form.Group>

                        <div className="mt-1">
                            <p>Sudah Punya Akun? <a href="/login" className="text-purple" style={{ fontWeight: 'bold' }}>Masuk</a></p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <Button
                                type="submit" 
                                className="px-4 py-2 w-75"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    borderRadius: '20px',
                                    backgroundColor: '#661599',
                                    color: 'white',
                                    border: 'none'
                                }}
                            >
                                Daftar
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateAccount;
