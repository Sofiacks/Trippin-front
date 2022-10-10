import Menu from "../components/Menu";
import { Container, Row, Col } from "react-bootstrap";
import Filtres from "../components/Filtres";
import Footer from "../components/Footer";
import tripContext from "../context.js/tripContext";
import Trips from "../components/Trips";
import { useState } from "react";

/*const data = [

    {
        ville: "Paris",
        date_aller: "24/10/2022",
        date_retour: "25/10/2022",
        description: "Quartier libre au moulin rouge",
        Tags: [
            "Quartier libre",
            "ParisByNight"
        ],
        nb_participants: 22
    },
    {
        ville: "Paris",
        date_aller: "24/10/2022",
        date_retour: "25/10/2022",
        description: "Quartier libre au moulin rouge",
        Tags: [
            "Quartier libre",
            "ParisByNight"
        ],
        nb_participants: 22
    }
];
*/

export default function Home() {
    
    const [trips, setTrips] = useState([]);

    return (
        <>
            <Menu />
            <tripContext.Provider value={{trips, setTrips}}>
      
                <Container fluid className="mb-5">
                    <Row>

                        {/*Formulaire de recherche  */}

                        <Col sm={12} md={3}>
                            <Filtres />
                        </Col>

                        {/* Résultats liste des voyages */}
                        <Col sm={12} md={8}>
                            <Row>
                                <Trips />
                            </Row>
                        </Col>
                    </Row>

                </Container>
            <Footer/>
            </tripContext.Provider>
        </>

    )
}