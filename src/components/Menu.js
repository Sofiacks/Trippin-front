
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, Image, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';
import loginContext from '../context.js/loginContext';


export default function Menu() {

  const { token, setToken } = useContext(loginContext);

  const handleLogout = (e) => {
    e.preventDefault();
    setToken(null);
    
  }

  return (
    <>
      <Navbar sticky="top" bg="black" variant="light">
        <Navbar.Brand className="ms-3" href="/" style={{ color: "#ffffff" }}>TRIPPIN</Navbar.Brand>
        <div style={{ width: '100vw', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="/home" style={{ color: "#efdb9f" }}>Accueil</Nav.Link>
              <Nav.Link href="/profile" style={{ color: "#ffffff" }}>Profil</Nav.Link>
              <Nav.Link href="/voyages" style={{ color: "#ffffff" }}>Mes Voyages </Nav.Link>
              <Nav.Link href="/blog" style={{ color: "#ffffff" }}>Blog</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "#ffffff" }}>Contact</Nav.Link>

            </Nav>
          </div>
          <Button className='me-3' variant="light" onClick={handleLogout}>Déconnexion</Button>{' '}
        </div>
      </Navbar>
    </>

  )
}