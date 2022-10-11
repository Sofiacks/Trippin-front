import { Modal, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

export default function Confirmed() {

    // declaration de la variable show en vue d'afficher le modal
    // "handleclose" pour attribuer la fonction fermer au bouton "fermer" ( setshow false) , l.38

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (

        <>
            {/* le modal est la petite fenetre qui s'ouvre sur la page actuelle apres un usestate */}

            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton> {/*petite croix en haut à droite, ici non alimentée */}
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
                    <Button variant="secondary" style={{ color: "#777777" }} onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
