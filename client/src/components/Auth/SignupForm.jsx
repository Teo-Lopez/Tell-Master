import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'
import AlertContext from '../../AlertContext'
function SignupForm({ setUser, onHide }) {
	const AuthService = new authService()
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const setAlert = useContext(AlertContext)

	function submitForm(e) {
		e.preventDefault()
		if (!username || !email || !password) {
			setAlert({ show: true, text: 'Por favor, rellena todos los campos.', variant: 'warning' })
			return
		}
		AuthService.signup({ username, email, password }).then(loggedInUser => setUser(loggedInUser))
		if (onHide) onHide()
	}

	function onChange(e) {
		let { name, value } = e.currentTarget
		switch (name) {
			case 'username':
				setUsername(value)
				break
			case 'email':
				setEmail(value)
				break
			case 'password':
				setPassword(value)
				break
			default:
				throw Error('no correct value')
		}
	}

	return (
		<Form onSubmit={submitForm}>
			<Form.Group controlId='username'>
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={onChange} name='username' value={username} type='text' placeholder='Enter username' />
				<Form.Text className='text-muted'>Choose an username.</Form.Text>
			</Form.Group>

			<Form.Group controlId='email' value={email}>
				<Form.Label>Email address</Form.Label>
				<Form.Control onChange={onChange} name='email' type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group controlId='password' value={password}>
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={onChange} name='password' type='password' placeholder='Password' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	)
}

export default SignupForm
