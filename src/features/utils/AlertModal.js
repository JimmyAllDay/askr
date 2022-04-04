import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function AlertModal({
  showAlert,
  handleCloseAlert,
  title,
  message,
}) {
  return (
    <>
      <Modal show={showAlert} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
