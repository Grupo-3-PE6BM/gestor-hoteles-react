import React from "react";
import { FormEvento } from "./FormEvento";
import { Modal } from "react-bootstrap";
export const UpdateEvento = ({ isOpen, onClose, eventlEdit }) => {
  if (!isOpen) {
    return null;
  }
  console.log("este es el eventEdit",eventlEdit);
  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {eventlEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormEvento
              evento={eventlEdit}
              id={eventlEdit._id}
              option={2}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};