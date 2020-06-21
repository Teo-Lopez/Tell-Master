import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Row, Col, Spinner } from "react-bootstrap";
import styled from "styled-components";

function CustomNavbar({ loggedInUser, showLogin, showSignup, logout }) {
  const StyledNavbar = styled(Navbar)`
    background-color: rgba(0, 0, 0, 0.7);
    height: 60px;
    p,
    a {
      color: rgba(240, 240, 240, 0.9) !important;
    }
    .dropdown-menu {
      background-color: rgba(0, 0, 0, 0.7);
      .dropdown-item:hover {
        background-color: rgba(44, 44, 44, 1);
      }
    }
  `;

  return loggedInUser === false ? (
    <Spinner />
  ) : loggedInUser === null ? (
    <StyledNavbar>
      <Nav style={{ width: "80%" }}>
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
      </Nav>
      <Nav style={{ width: "20%", justifyContent: "flex-end" }}>
        <NavDropdown title="Mi perfil" id="nav-dropdown" drop="left">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          style={{ width: "100vw" }}
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </StyledNavbar>
  ) : (
    <StyledNavbar>
      <Nav style={{ width: "80%" }}>
        <Nav.Item>
          <Nav.Link as={NavLink} to={"/"}>
            <i className="fas fa-home"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Mis partidas" id="nav-dropdown" drop="down">
            <NavDropdown.Item>
              <Nav.Link as={NavLink} to={"/myGames"}>
                En juego
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link as={NavLink} to={"/myGames"}>
                Creadas por mí
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
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
      </Nav>
      <Nav style={{ width: "20%", justifyContent: "flex-end" }}>
        <Nav.Item onClick={logout}>Logout</Nav.Item>
      </Nav>
    </StyledNavbar>
  );
}

export default CustomNavbar;
