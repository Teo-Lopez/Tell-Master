import React from 'react'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './UserContext'
import { AlertProvider } from './AlertContext'
import { ModalProvider } from './ModalContext'
function Providers({
	children,
	theme,
	loggedInUser,
	setUser,
	setAlert,
	setModal
}) {
	return (
		<ThemeProvider theme={theme}>
			<ModalProvider value={setModal}>
				<AlertProvider value={setAlert}>
					<UserProvider value={{ loggedInUser, setUser }}>
						{children}
					</UserProvider>
				</AlertProvider>
			</ModalProvider>
		</ThemeProvider>
	)
}

export default Providers
