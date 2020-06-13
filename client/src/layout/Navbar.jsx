import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, NavDropdown, Row, Col, Spinner } from "react-bootstrap";

function Navbar({ loggedInUser, showLogin, showSignup }) {
  return loggedInUser === false ? (
    <Spinner />
  ) : loggedInUser === null ? (
    <Container fluid>
      <div className="navbar">
        <Nav variant="pills">
          <Row className="justify-content-between" style={{ width: "100vw" }}>
            <Col lg={5} style={{ display: "flex" }}>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/"}>
                  <i className="fas fa-home"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={showLogin}>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={showSignup}>Signup</Nav.Link>
              </Nav.Item>
            </Col>
            <Col lg={2}>
              <NavDropdown title="Mi perfil" id="nav-dropdown" drop="left">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </Nav>
      </div>
    </Container>
  ) : (
    <Container fluid>
      <div className="navbar">
        <Nav variant="pills">
          <Row className="justify-content-between" style={{ width: "100vw" }}>
            <Col lg={5} style={{ display: "flex" }}>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/"}>
                  <i className="fas fa-home"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/myGames"}>
                  Mis Partidas
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/myCharacters"}>
                  Mis personajes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/newGame"}>
                  Crear Partida
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col lg={2}>
              <NavDropdown title="Mi perfil" id="nav-dropdown" drop="left">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </Nav>
      </div>
    </Container>
  );
}

export default Navbar;
