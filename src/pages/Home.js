import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { Container, Row, Col, Spinner, } from "react-bootstrap";
import Filtres from "../components/Filtres";
import Cards from "../components/Cards";

const data = [

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





export default function Home() {

   
    const [isLoading, setLoading] = useState(true);
    const [trips,setTrips] = useState([]);

    useEffect(() => {

        const fetchTrip = async () => {

            await fetch('http://127.0.0.1:8000/api/trips?page=1')
                .then(response => response.json())
                .then(response => { 
                    // console.log(JSON.stringify(response))
                setTrips(response["hydra:member"]); 
                setLoading(false);
                })



        };
        fetchTrip();

    }, []);

    return (
        <>
            <Menu />

            <Container fluid className="p-5">
                <Row>

                    {/*Formulaire de recherche  */}

                    <Col sm={12} md={3}>
                        <Filtres />
                    </Col>

                    <Col sm={12} md={8}>
                        <Row>
                            {
                                isLoading?
                                <Spinner animation="border" variant="dark"/>
                                :

                                trips.map(item => (
                                    <>
                                        <Col sm={12} md={6}>
                                            <Cards
                                                key={item.id}
                                                title={item.ville}
                                                aller={item.dateDepart}
                                                retour={item.dateRetour}
                                                description={item.description} 
                                                nbtrippers={item.nbParticipants}
                                                tags={item.tags}/>


                                        </Col>
                                    </>
                                ))

                            }

                        </Row>
                    </Col>
                </Row>

            </Container>
        </>

    )
}