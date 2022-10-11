import { Modal, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

export default function Details(props) {

  // declaration de variable "show" pour afficher le modal  qui passe a false grace a handle close
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

        {/*"j'y vais renvoit sur un formulaire d'inscription"*/}
        {/* la fonction onclick handle close remerfe le modal */}
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
