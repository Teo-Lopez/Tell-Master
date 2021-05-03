import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import logo from './invertedlogo.png'
import Searchbar from './Searchbar'
import gamesService from '../../services/games.service'
const GameService = new gamesService()

const fetchGames = (title) => GameService.getByTitle(title)

//TODO sobrescribir bootstrap bien y no a base de importants
const StyledNavbar = styled(Navbar)`
  & > div {
    align-items: center;
    a {
      color: ${(props) => props.theme.colors.white + '!important'};
    }
  }

  .dropdown-menu.show {
    background-color: ${(props) => props.theme.colors.dark};
    border: 0.5px solid black;
  }
`

function CustomNavbar({ loggedInUser, showLogin, showSignup, logout }) {
  return loggedInUser === false ? (
    <Spinner />
  ) : loggedInUser === null ? (
    <StyledNavbar collapseOnSelect expand='lg'>
      <Navbar.Brand as={NavLink} to={'/'}>
        <img
          style={{ height: '36px' }}
          src={logo}
          alt='Logo de dado icosaédrico'
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ backgroundColor: 'whitesmoke' }}
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav style={{ width: '60%' }}>
          <Nav.Link onClick={showLogin}>Login</Nav.Link>
          <Nav.Link onClick={showSignup}>Signup</Nav.Link>
        </Nav>
        <Nav style={{ width: '40%', justifyContent: 'flex-end' }}>
          <Searchbar fetchGames={fetchGames} />
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  ) : (
    <StyledNavbar collapseOnSelect expand='lg'>
      <Navbar.Brand as={NavLink} to={'/'}>
        <img
          style={{ height: '36px' }}
          src={logo}
          alt='Logo de dado icosaédrico'
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ backgroundColor: 'whitesmoke' }}
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav style={{ width: '60%' }}>
          <NavDropdown title='Mis historias' id='nav-dropdown' drop='down'>
            <Nav.Link as={NavLink} to={'/playedGames'}>
              En juego
            </Nav.Link>
            <NavDropdown.Divider />

            <Nav.Link as={NavLink} to={'/createdGames'}>
              Creadas por mí
            </Nav.Link>
          </NavDropdown>
          <Nav.Link as={NavLink} to={'/myCharacters'}>
            Mis personajes
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/newGame'}>
            Crear Partida
          </Nav.Link>
          <Nav.Link href='#' onClick={logout}>
            Logout
          </Nav.Link>
        </Nav>
        <Nav style={{ width: '40%', justifyContent: 'flex-end' }}>
          <Nav.Item style={{ width: '100%' }}>
            <Searchbar fetchGames={fetchGames} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default CustomNavbar
