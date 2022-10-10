import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import CardArticle from "../components/CardArticle";
import Menu from "../components/Menu";

export default function Blog () { 

    const [articles,setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {

        //on fetch les articles
        const fetchArticles = async () => {
    
          await fetch("http://127.0.0.1:8000/api/articles?page=1")
            .then(response => response.json())
            .then(response => {
              //console.log("Categories:" + JSON.stringify(response['hydra:member']))
              setArticles(response['hydra:member']);
              setLoading(false);
            })
        };
    
        fetchArticles();
    
      },[])
    return (
        
    <>
        <Menu />
        <Container>
        {isLoading?
            <Spinner animation="border" variant="dark" />
            :
            articles.map((item, index) => (
                <CardArticle 
                key={item.id}
                title={item.titre}
                date={item.dateCreation}
                author={item.auteur.username}
                contenu={item.contenu}
                tags={item.tag}
                nbComments={item.commentaires.length}
                photo={item.photos[0]? item.photos[0].data:null}/>
            ))
        }
        </Container>

    </>
        
    )
}