import React, { useContext } from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../../../UserContext'
import { MediumButton } from '../../shared/Buttons'
import SignupForm from '../../Auth/SignupForm'
import ModalContext from '../../../ModalContext'

const Hero = styled.section`
	/* background-color: ${props => props.theme.colors.darkGreen}; */
	height: ${({ theme }) => theme.sizes.getFullMain()};
	text-align: center;
	/* padding: 50px; */

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
		/* background-color: ${props => props.theme.colors.greenish}; */
	}

	button {
		padding: 5px 10px;
	}

	p {
		padding: 5px;
		font-size: 1.2em;
	}
`

function Home() {
	const { loggedInUser } = useContext(UserContext)
	const setModal = useContext(ModalContext)

	const showSignup = () => setModal({ show: true, component: <SignupForm />, title: 'Signup' })

	return (
		<Hero>
			<Container>
				<article>
					<header>
						<h1>Juega y comparte tus propias historias.</h1>
					</header>
					<div>
						<p>¿Alguna vez has pensado algo cómo: "¡no abras la puerta, es el asesino!"</p>
						<p>
							Ahora puedes hacerlo. Juega o escribe historias en las que puedas tomar decisiones por
							el protagonista, juega distintas rutas y finales e intenta llegar con vida a la última
							página.
						</p>
						<p>
							Y si prefieres un reto aún mayor, juega a las historias de rol dónde podrás subir de
							nivel y decidir cómo es tu personaje.
						</p>
					</div>
					<Row className='justify-content-around' as={'footer'}>
						<Col lg={4}>
							<p>¿Con ganas de empezar?</p>
							<Link to='/lastGames'>
								<MediumButton>¡Mira nuestras partidas en juego!</MediumButton>
							</Link>
						</Col>
						<Col lg={4}>
							<p>¿Quieres escribir?</p>
							{!loggedInUser ? (
								<MediumButton onClick={showSignup}>Registrate y a crear!</MediumButton>
							) : (
								<Link to='/newGame'>
									<MediumButton>¡Crea tu partida!</MediumButton>
								</Link>
							)}
						</Col>
					</Row>
				</article>
			</Container>
		</Hero>
	)
}

export default Home
