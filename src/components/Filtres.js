import { useContext, useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import TripContext from "../context.js/tripContext";


export default function Filtres() {

  const {trips, setTrips} = useContext(TripContext);
  const [isLoading, setLoading] = useState(false);
    
  const [tags, setTags] = useState([]);
  const [listTags, setListTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {

    //on fetch d'abord les categories pour alimenter les possibilités de choix dans le formulaire

    const fetchFiltres = async () => {

      await fetch("http://127.0.0.1:8000/api/categories?page=1")
        .then(response => response.json())
        .then(response => {
          //console.log("Categories:" + JSON.stringify(response['hydra:member']))
          setListCategories(response['hydra:member']);
        })

      //on fetch également les Tags pour alimenter les possibilités de choix dans le formulaire

    };

    fetchFiltres();

  },[])

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://127.0.0.1:8000/api/trips?page=1&description=${encodeURIComponent(description)}`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        //console.log("reponse: " + JSON.stringify(response));
        setTrips(response["hydra:member"]);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }

  const handleChangeDescription = (e) => { setDescription(e.target.value)}

  return (

    <>
      <Form.Group className="mb-3">
        <Form.Label>Mot-clés</Form.Label>
        <Form.Control placeholder="mot-clé" onChange={handleChangeDescription}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Catégories</Form.Label>
        <Form.Control  
          as="select" 
          value={categories} 
          onChange={e => {
              setCategories([].slice.call(e.target.selectedOptions).map(item => item.value));
              console.log(JSON.stringify(categories))
            }
          }
          multiple 
          >
          <option></option>

          {
            listCategories.map((item) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              )
            })
          }

        </Form.Control>
      </Form.Group>
      
      <Button type="submit" onClick={handleSubmit}>Rechercher 
      {isLoading?<Spinner animation="border" variant="light" size="sm"/>:<></>}</Button>
    </>
  )
}
  /* {<Form>

  <div className="wrapper">
    <div className="title">
      Trouvez votre voyage
    </div>
  </div>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={2}>
      Ville
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="ville" placeholder="Où" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={2}>
      Aller
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={2}>
      Retour
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="date" />
    </Col>
  </Form.Group>


  <fieldset>

    <Form.Label column sm={12}>
      Centre(s) d'intêret(s)
    </Form.Label>

    <Form.Select aria-label="Default select example">
      <option value="0">Choisissez</option>
      <option value="1">Peu importe</option>
      <option value="2">Aucun</option>
      <option value="3">Personnaliser...</option>
    </Form.Select>

    <a href="/" className="criteres" value="+de critères">+de critères</a>

  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}> </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>

      {/*onClick={handleChange} 

      <Button type="submit" >Rechercher</Button>

    </Col>

  </Form.Group>
</Form> }*/