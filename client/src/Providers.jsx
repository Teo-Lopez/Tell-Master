import React from 'react'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './UserContext'
import { AlertProvider } from './AlertContext'

function Providers({ children, theme, loggedInUser, setUser, setAlert }) {
	return (
		<ThemeProvider theme={theme}>
			<AlertProvider value={setAlert}>
				<UserProvider value={{ loggedInUser, setUser }}>
					{children}
				</UserProvider>
			</AlertProvider>
		</ThemeProvider>
	)
}

export default Providers
