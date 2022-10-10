import { Modal, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

export default function Confirmed() {


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
                    <Modal.Title>Super! </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    Ton inscription a bien été prise en compte!
                    Regardes vite dans ta boîte mail la marche à suivre t'a été envoyé afn de valider ta réservation!
                    Tu peux consulter l'ensemble de tes voyages dans l'onglet "Mes Voyages" de ton espace client.
                    <br />
                    Postes tes expériences sur le blog de Trippin et échanges avec d'autres voyageurs!

                </Modal.Body>

                <Modal.Footer>
                    <a href='/blog'><Button variant="primary" type="submit">Share!</Button></a>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
