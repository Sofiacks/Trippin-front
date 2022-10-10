import { useEffect, useState, useContext } from "react";
import {Col, Spinner} from 'react-bootstrap';
import tripContext from "../context.js/tripContext";
import Cards from "./Cards";

const Trips = () => {
    const [isLoading, setLoading] = useState(true);
    const {trips,setTrips} = useContext(tripContext);
    //const [trips, setTrips] = useState([]);


    const fetchTrip = async () => {

        await fetch('http://127.0.0.1:8000/api/trips?page=1')
            .then(response => response.json())
            .then(response => {
                //console.log("fetch:" + JSON.stringify(response))
                setTrips(response["hydra:member"]);
                setLoading(false);
            })

    };
    
    useEffect(() => {
       fetchTrip();
    }, []);


    if (isLoading === false) {
        return (
            trips.map((item, index) => (
                <>
                    <Col sm={12} md={6}>
                        <Cards
                            key={index.toString()}
                            title={item.ville}
                            aller={item.dateDepart}
                            retour={item.dateRetour}
                            description={item.description}
                            nbtrippers={item.nbParticipants}
                            tags={item.tags}
                            image={item.photo} />

                        {console.log("id:" + item.id + ", ville:" + item.ville)}
                    </Col>
                </>
            ))
        );
    }

    return (<Spinner animation="border" variant="dark" />
    );
}

export default Trips;