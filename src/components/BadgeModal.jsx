import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import MudahImg from "../assets/images/illustrations/mudah.png";

const BadgeModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="text-center">
        <img src={MudahImg} alt="Badge Mudah" className="mb-3" style={{ width: '100px' }} />
        <h4>Badge Mudah</h4>
        <p>Selamat! Kamu telah mendapatkan Badge Mudah.</p>
        <Button onClick={onClose}>
          Ambil
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default BadgeModal;