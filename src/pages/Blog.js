import { Container } from "react-bootstrap";
import CardArticle from "../components/CardArticle";
import Menu from "../components/Menu";

export default function Blog () { 

    return (
        
    <>
        <Menu />
        <Container>
            <CardArticle />
            <CardArticle />
        </Container>

    </>
        
    )
}