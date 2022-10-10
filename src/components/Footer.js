import React from 'react';
import { Col, Container, Row, NavLink, Image } from 'react-bootstrap';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import logo from '../assets/logo.png';


export default function Footer () {

    return (
        <Container fluid  className="m-0" style={{backgroundColor: "#FFFFFF"}} >
          <Row>
            <Col>
            <div
                className="mt-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                    <NavLink href='#'>Mentions légales</NavLink>
                    <NavLink href='#'>CGV / CGU</NavLink>
                </div>
            </Col>
            <Col>
            <div
                className= "mt-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf:"stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
            <NavLink>TVA FR12345678910</NavLink>
            <NavLink>SIRET 12345678910112</NavLink>
            </div>
            </Col>
            <Col>
            <div
                className="mt-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf:"stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                    <TiSocialFacebookCircular size={50}/>
                    <TiSocialLinkedinCircular size={50}/>
                    </div>
            </Col>
            <Col>
            <div
                className="mb-2 mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf:"stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                    <Image variant="" src={logo} alt="logo" height='100vh'/>
                    <Row>A hobby, a city and let's trippin</Row>
                </div>
            </Col>
        </Row>
        <div><small className="text-muted">Copyright trippin.fr est soumis au droit d'auteur, toute copie, reproduction partielle ou totale est susceptible d'entraîner des poursuites judiciaires</small></div>
      </Container>
);
};

