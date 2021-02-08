import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../invertedlogo.png'
import Searchbar from './Searchbar'
import gamesService from '../services/games.service'
const GameService = new gamesService()

const fetchGames = title => GameService.getByTitle(title)

const StyledNavbar = styled(Navbar)`
	background-color: rgba(0, 0, 0, 0.7);
	height: 60px;
	p,
	a {
		color: ${props => props.theme.colors.light + '!important'};
	}
	.dropdown-menu {
		background-color: ${props => props.theme.background.semiSolid};
		.dropdown-item:hover {
			background-color: ${props => props.theme.background.modals};
		}
	}
`

function CustomNavbar({ loggedInUser, showLogin, showSignup, logout }) {
	return loggedInUser === false ? (
		<Spinner />
	) : loggedInUser === null ? (
		<StyledNavbar>
			<Nav style={{ width: '60%' }}>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/'}>
						<img style={{ height: '36px' }} src={logo} alt='Logo de dado icosaédrico'></img>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={showLogin}>Login</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={showSignup}>Signup</Nav.Link>
				</Nav.Item>
			</Nav>
			<Nav style={{ width: '40%', justifyContent: 'flex-end' }}>
				<Searchbar fetchGames={fetchGames} />
			</Nav>
		</StyledNavbar>
	) : (
		<StyledNavbar>
			<Nav style={{ width: '60%' }}>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/'}>
						<img style={{ height: '36px' }} src={logo} alt='Logo de dado icosaédrico'></img>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<NavDropdown title='Mis historias' id='nav-dropdown' drop='down'>
						<NavDropdown.Item>
							<Nav.Link as={NavLink} to={'/myGames'}>
								En juego
							</Nav.Link>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item>
							<Nav.Link as={NavLink} to={'/myCreatedGames'}>
								Creadas por mí
							</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/myCharacters'}>
						Mis personajes
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={NavLink} to={'/newGame'}>
						Crear Partida
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<Nav style={{ width: '40%', justifyContent: 'flex-end' }}>
				{/* <Nav.Item> */}
				<Searchbar fetchGames={fetchGames} />
				{/* </Nav.Item> */}
				<Nav.Item onClick={logout}>Logout</Nav.Item>
			</Nav>
		</StyledNavbar>
	)
}

export default CustomNavbar
