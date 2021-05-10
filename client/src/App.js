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
		font-family: "Alegreya"
	}
    body {
      color: ${theme.colors.white};
      background-color: ${theme.colors.dark};
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
	const [modal, setModal] = useState({
		show: false,
		title: '',
		component: null
	})
	const [alert, setAlert] = useState({
		show: false,
		text: '',
		variant: 'warning'
	})
	const [loggedInUser, setloggedInUser] = useState(false)

	const setloginModal = () =>
		setModal({
			show: true,
			title: 'Login',
			component: <LoginForm />
		})
	const setsignupModal = () =>
		setModal({
			show: true,
			title: 'Signup',
			component: <SignupForm />
		})
	const closeModal = () => setModal({ show: false, title: '', component: null })

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
	}, [])

	return (
		<Providers
			setAlert={setAlert}
			theme={theme}
			loggedInUser={loggedInUser}
			setUser={setUser}
			setModal={setModal}
		>
			<GlobalStyle />
			<Navbar
				logout={logout}
				showSignup={() => setsignupModal()}
				showLogin={() => setloginModal()}
				loggedInUser={loggedInUser}
			/>

			<main>
				<Routes
					loggedInUser={loggedInUser}
					setloginModal={setModal}
					setUser={setUser}
				/>
			</main>

			<CenteredModal
				title={modal.title}
				show={modal.show}
				children={modal.component}
				onHide={() => closeModal()}
			/>
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
