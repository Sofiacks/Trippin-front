
      import {Container, Nav, Navbar,Image} from 'react-bootstrap';
      import logo from '../assets/logo.png';
      
      export default function Menu () {

        return (
          <>
            <Navbar sticky="top" bg="black" variant="light">
              <Container>
                <Navbar.Brand href="/"><Image variant="" src={logo} alt="logo" height='60vh' /></Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/home" style={{color: "#efdb9f"}}>Accueil</Nav.Link>
                  <Nav.Link href="/profile"style={{color: "#ffffff"}}>Profil</Nav.Link>
                  <Nav.Link href="/voyages"style={{color: "#ffffff"}}>Mes Voyages </Nav.Link>
                  <Nav.Link href="/blog"style={{color: "#ffffff"}}>Blog</Nav.Link>
                  <Nav.Link href="/contact"style={{color: "#ffffff"}}>Contact</Nav.Link>
                  <Nav.Link href="/login"style={{color: "#ffffff"}}>Se déconnecter</Nav.Link>
                  

                </Nav>
              </Container>
            </Navbar>
          </>
        
        )}