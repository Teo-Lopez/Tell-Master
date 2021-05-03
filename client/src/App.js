//#region IMPORTS
import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import CenteredModal from './components/shared/Modal'
import { Alert } from 'react-bootstrap'
import authService from './services/auth.service'
import { createGlobalStyle } from 'styled-components'
import { theme } from './themeContext'
import Routes from './components/Routes'
import Providers from './Providers'

//#endregion IMPORTS
const AuthService = new authService()

const GlobalStyle = createGlobalStyle`
		* {
			font-family: "Special Elite"
		}
    body {
      color: ${theme.colors.dark};
      background-color: ${theme.colors.white};
    }

		main {
			padding: 50px 90px;
		}
		
    a {
      color: #eee;
    }
    a:hover {
      color: #eee;
      text-decoration: none;
    }

		input {
			background-color: rgb(235, 235, 235);
		}
`

function App() {
	const [loginModal, setloginModal] = useState(false)
	const [signupModal, setSignupModal] = useState(false)
	const [loggedInUser, setloggedInUser] = useState(false)
	const [alert, setAlert] = useState({
		show: false,
		text: '',
		variant: 'warning'
	})

	function logout() {
		AuthService.logout().then(() => setloggedInUser(null))
	}

	function setUser() {
		AuthService.loggedin().then(user => {
			setloggedInUser(user || null)
		})
	}

	useEffect(() => {
		setUser()
		return () => {}
	}, [])

	return (
		<Providers
			setAlert={setAlert}
			theme={theme}
			loggedInUser={loggedInUser}
			setUser={setUser}
		>
			<GlobalStyle />
			<Navbar
				logout={logout}
				showSignup={() => setSignupModal(true)}
				showLogin={() => setloginModal(true)}
				loggedInUser={loggedInUser}
			/>
			<main>
				<Routes
					loggedInUser={loggedInUser}
					setloginModal={setloginModal}
					setUser={setUser}
				/>
				<>
					<CenteredModal
						title={'Login'}
						show={loginModal}
						onHideCallback={() => setloginModal(false)}
					>
						<LoginForm setUser={setUser} />
					</CenteredModal>
					<CenteredModal
						title={'Signup'}
						show={signupModal}
						onHideCallback={() => setSignupModal(false)}
					>
						<SignupForm setUser={setUser} />
					</CenteredModal>
				</>
			</main>
			<Alert
				onClose={() => setAlert({ show: false, text: '' })}
				style={{ display: 'inline-block', marginLeft: '16px' }}
				show={alert.show}
				variant={alert.variant}
				dismissible
			>
				{alert.text}
			</Alert>
		</Providers>
	)
}

export default App
