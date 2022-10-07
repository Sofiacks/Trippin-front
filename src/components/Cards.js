
import { useState } from "react";
import { Badge, Card } from "react-bootstrap";
import Details from "./Details";


export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClick = () => { setShow(!show); }
    console.log('props: ' + JSON.stringify(props))
    return (
        <Card onClick={handleClick}>
            <Card.Img variant="top" src={require('../assets/paris.jfif')} alt="Card image barce" height='200vh' />
            <Card.Body>
                <Card.Title>{props.title} </Card.Title>
                <Card.Text>
                    Séjour du {props.aller} au {props.retour}
                </Card.Text>
                {props.tags.map(item=>(
                    <Badge pills key={item} style={{ margin:"5px"}}>{item.name}</Badge>
                ))}
            </Card.Body>
            {show ? <Details description={props.description} titre={props.title} /> : <></>}
        </Card>
    )
}

