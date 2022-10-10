
      import {Container, Nav, Navbar,Image} from 'react-bootstrap';
      import logo from '../assets/logo.png';
      
      export default function Menu () {

        return (
          <>
            <Navbar sticky="top" bg="light" variant="light">
              <Container>
                <Navbar.Brand href="#home"><Image variant="" src={logo} alt="logo" height='60vh'/></Navbar.Brand>
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