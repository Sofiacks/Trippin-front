import { Modal, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

export default function Details(props) {


  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (

    <>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {props.titre} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description}
        </Modal.Body>

        <Modal.Footer>
          <a href='/participation'><Button variant="primary" type="submit">J'y vais!</Button></a>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}
