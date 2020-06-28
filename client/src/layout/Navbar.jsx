import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Row, Col, Spinner } from "react-bootstrap";
import styled from "styled-components";
import logo from "../invertedlogo.png";
function CustomNavbar({ loggedInUser, showLogin, showSignup, logout }) {
  const StyledNavbar = styled(Navbar)`
    background-color: rgba(0, 0, 0, 0.7);
    height: 60px;
    p,
    a {
      color: ${(props) => props.theme.colors.light + "!important"};
    }
    .dropdown-menu {
      background-color: ${(props) => props.theme.background.semiSolid};
      .dropdown-item:hover {
        background-color: ${(props) => props.theme.background.modals};
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
            <img style={{ height: "36px" }} src={logo}></img>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={showLogin}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={showSignup}>Signup</Nav.Link>
        </Nav.Item>
      </Nav>
    </StyledNavbar>
  ) : (
    <StyledNavbar>
      <Nav style={{ width: "80%" }}>
        <Nav.Item>
          <Nav.Link as={NavLink} to={"/"}>
            <img style={{ height: "36px" }} src={logo}></img>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Mis historias" id="nav-dropdown" drop="down">
            <NavDropdown.Item>
              <Nav.Link as={NavLink} to={"/myGames"}>
                En juego
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link as={NavLink} to={"/myCreatedGames"}>
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
