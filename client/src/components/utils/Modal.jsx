import React, { cloneElement } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

function CenteredModal(props) {
  const { show, children, onHide, title, noHeader } = props;

  const ThemeModal = styled.div`
    background-color: ${(props) => props.theme.background.modals};
    width: 40%;
    margin: 10vh auto;
    border-radius: 5px;
    font-size: 1.1em;
    color: white;

    div {
      background-color: ${(props) => props.theme.background.modals};
    }
  `;
  return (
    <Modal dialogAs={ThemeModal} show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered autoFocus>
      {!noHeader && (
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{cloneElement(children, { show, onHide })}</Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
