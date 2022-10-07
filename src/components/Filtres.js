import { Form, Col, Row, Button } from 'react-bootstrap';
export default function Filtres() {

  return (


    <Form>

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

          {/*onClick={handleChange} */}

          <Button type="submit" >Rechercher</Button>

        </Col>

      </Form.Group>
    </Form>
  )

}