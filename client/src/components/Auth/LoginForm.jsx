import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { Button } from '../shared/Buttons'

function LoginForm({ setUser, onHide }) {
	const AuthService = new authService()
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function clearForm() {
		setUsername('')
		setEmail('')
		setPassword('')
	}

	function submitForm(e) {
		e.preventDefault()
		AuthService.login({ username, email, password }).then(loggedInUser => setUser(loggedInUser))
		clearForm()
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
			</Form.Group>

			<Form.Group controlId='password' value={password}>
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={onChange} name='password' type='password' placeholder='Password' />
			</Form.Group>
			<Button text='Submit' type='submit'></Button>
		</Form>
	)
}

export default LoginForm
