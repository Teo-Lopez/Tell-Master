import React, { useContext } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../../../UserContext'

const Hero = styled.section`
	background-color: ${props => props.theme.background.lightOverlay};
	height: 100%;
	text-align: center;
	padding: 50px;

	header {
		padding: 30px;
	}

	article div {
		padding: 20px;
	}

	footer {
		padding: 30px;
	}

	footer div {
		padding: 30px 0;
		border-radius: 10px;
		/* background-color: ${props => props.theme.background.lightOverlay}; */
	}

	button {
		padding: 5px 10px;
	}

	p {
		padding: 5px;
		font-size: 1.2em;
	}
`

function Home({ showLogin }) {
	const { loggedInUser } = useContext(UserContext)

	return (
		<Hero>
			<article>
				<header>
					<h1>Juega y comparte tus propias historias.</h1>
				</header>
				<div>
					<p>¿Alguna vez has pensado algo cómo: "¡no abras la puerta, es el asesino!</p>
					<p>
						Ahora puedes hacerlo. Juega o escribe historias en las que puedas tomar decisiones por el protagonista, juega distintas rutas y
						finales e intenta llegar con vida a la última página.
					</p>
					<p>
						Además si prefieres un reto aún mayor, juega a las historias <strong>rol</strong> dónde podrás subir de nivel y decidir cómo es
						tu personaje.
					</p>
				</div>
				<Row className='justify-content-around' as={'footer'}>
					<Col lg={3}>
						<p>¿Con ganas de empezar?</p>
						<Link to='/lastGames'>
							<button>¡Mira nuestras partidas en juego!</button>
						</Link>
					</Col>
					<Col lg={3}>
						<p>¿Quieres escribir?</p>
						{!loggedInUser ? (
							<button onClick={() => showLogin(true)}>Registrate y a crear!</button>
						) : (
							<Link to='/newGame'>
								<button>¡Crea tu partida!</button>
							</Link>
						)}
					</Col>
				</Row>
			</article>
		</Hero>
	)
}

export default Home
