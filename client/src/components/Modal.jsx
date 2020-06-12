import React, { Children, isValidElement, cloneElement } from "react";
import { Modal } from "react-bootstrap";

function CenteredModal({ show, children, onHide, title }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered autoFocus>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{cloneElement(children, { show, onHide })}</Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
