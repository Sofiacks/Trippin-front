
import { useState } from "react";
import { Badge, Card } from "react-bootstrap";
import Details from "./Details";


export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClick = () => { setShow(!show); }
    //console.log('props: ' + JSON.stringify(props))
    return (
        <Card className="m-2 shadow-sm" onClick={handleClick}>
            <Card.Img variant="top" src={props.image} alt="Card image barce" height='200vh' />
            <Card.Body>
                <Card.Title>{props.title} </Card.Title>
                <Card.Text>
                    <small>
                        Séjour du {
                    new Intl.DateTimeFormat("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                      }).format(new Date(props.aller))} au {
                      new Intl.DateTimeFormat("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                      }).format(new Date(props.retour))}
                      </small>
                </Card.Text>
                {props.tags.map((item,ind)=>(
                    <Badge pills="true" key={ind} style={{ margin:"5px"}}>{item.name}</Badge>
                ))}
            </Card.Body>
            {show ? <Details description={props.description} titre={props.title} /> : <></>}
        </Card>
    )
}

