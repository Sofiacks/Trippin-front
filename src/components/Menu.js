
      import {Container, Nav, Navbar} from 'react-bootstrap';
      
      export default function Menu () {

        return (
          <>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="#home">Trippin</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Accueil</Nav.Link>
                  <Nav.Link href="/profile">Profil</Nav.Link>
                  <Nav.Link href="/voyages">Mes voyages </Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/">Se déconnecter</Nav.Link>
                  <Nav.Link href="/">Contact</Nav.Link>


                </Nav>
              </Container>
            </Navbar>
          </>
        
        )}