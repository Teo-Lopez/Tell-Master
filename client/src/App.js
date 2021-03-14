//#region IMPORTS
import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import authService from './services/auth.service'
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import CenteredModal from './components/shared/Modal'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { UserProvider } from './UserContext'
import { darkTheme } from './themeContext'
import Routes from './components/Routes'

//#endregion IMPORTS
const AuthService = new authService()

const GlobalStyle = createGlobalStyle`
		* {
			font-family: "Special Elite"
		}
    body {
      color: ${darkTheme.colors.general};
      background-color: ${darkTheme.background.general};
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

	function logout() {
		AuthService.logout().then(() => setloggedInUser(null))
	}

	function setUser() {
		AuthService.loggedin().then(user => setloggedInUser(user || null))
	}

	useEffect(() => {
		setUser()
		return () => {}
	}, [])

	return (
		<ThemeProvider theme={darkTheme}>
			<UserProvider value={{ loggedInUser, setUser }}>
				<GlobalStyle />
				<Navbar logout={logout} showSignup={() => setSignupModal(true)} showLogin={() => setloginModal(true)} loggedInUser={loggedInUser} />
				<main>
					<Routes loggedInUser={loggedInUser} setloginModal={setloginModal} setUser={setUser} />
					<>
						<CenteredModal title={'Login'} show={loginModal} onHide={() => setloginModal(false)}>
							<LoginForm setUser={setUser} />
						</CenteredModal>
						<CenteredModal title={'Signup'} show={signupModal} onHide={() => setSignupModal(false)}>
							<SignupForm setUser={setUser} />
						</CenteredModal>
					</>
				</main>
			</UserProvider>
		</ThemeProvider>
	)
}

export default App
