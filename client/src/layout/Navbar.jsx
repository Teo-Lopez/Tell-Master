import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../invertedlogo.png'
import Searchbar from './Searchbar'
import gamesService from '../services/games.service'
const GameService = new gamesService()

const fetchGames = title => GameService.getByTitle(title)

//TODO sobrescribir bootstrap bien y no a base de importants
const StyledNavbar = styled(Navbar)`
	.dropdown-menu a {
		background-color: rgb(25, 25, 25);
	}

	& > div {
		align-items: center;
		a {
			color: ${props => props.theme.colors.light + '!important'};
			padding-right: 25px !important;
		}
	}

	.dropdown-menu.show {
		background-color: ${props => props.theme.background.lightOverlay};
	}
`

function CustomNavbar({ loggedInUser, showLogin, showSignup, logout }) {
	return loggedInUser === false ? (
		<Spinner />
	) : loggedInUser === null ? (
		<StyledNavbar>
			<Nav style={{ width: '60%' }}>
				<Nav.Link as={NavLink} to={'/'}>
					<img style={{ height: '36px' }} src={logo} alt='Logo de dado icosaédrico'></img>
				</Nav.Link>
				<Nav.Link onClick={showLogin}>Login</Nav.Link>
				<Nav.Link onClick={showSignup}>Signup</Nav.Link>
			</Nav>

			<Nav style={{ width: '40%', justifyContent: 'flex-end' }}>
				<Searchbar fetchGames={fetchGames} />
			</Nav>
		</StyledNavbar>
	) : (
		<StyledNavbar>
			<Nav style={{ width: '60%' }}>
				<Nav.Link as={NavLink} to={'/'}>
					<img style={{ height: '36px' }} src={logo} alt='Logo de dado icosaédrico'></img>
				</Nav.Link>
				<NavDropdown title='Mis historias' id='nav-dropdown' drop='down'>
					<Nav.Link as={NavLink} to={'/myGames'}>
						En juego
					</Nav.Link>
					<NavDropdown.Divider />

					<Nav.Link as={NavLink} to={'/myCreatedGames'}>
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
		</StyledNavbar>
	)
}

export default CustomNavbar
