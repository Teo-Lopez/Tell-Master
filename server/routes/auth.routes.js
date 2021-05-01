const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const passport = require('passport')
//api/auth
router.get('/', (req, res, next) => {
	res.json({ user: { name: 'whatever' } })
})

router.post('/login', (req, res, next) => {
	const { username, password } = req.body
	User.findOne({ username })
		.lean()
		.populate('characters')
		.then(foundUser => {
			if (!foundUser) {
				res.json({ message: 'Usuario no registrado.' })
				return
			}

			if (!bcrypt.compareSync(password, foundUser.password)) {
				res.json({ message: 'Contraseña incorrecta.' })
				return
			}

			req.session.user = foundUser
			req.user = foundUser
			res.json(foundUser)
		})
		.catch(err => next(err))
})

router.post('/logout', (req, res, next) => {
	// req.logout() is defined by passport
	req.logout()
	res.status(200).json({ message: 'Log out success!' })
})

router.get('/loggedin', (req, res, next) => {
	if (req.session) {
		res.status(200).json(req.session.user)
		return
	} else {
		res.status(403).json({ message: 'Unauthorized' })
	}
})

router.post('/signup', (req, res) => {
	const { username, email, password, savedGames, characters } = req.body

	if (!username || !password) {
		res.status(400).json({ message: 'Proporcione un nombre y contraseña' })
		return
	}

	//TO-DO FORTALECER CONTRASEÑA
	if (password.length < 2) {
		res.status(400).json({ message: 'La contraseña necesita como mínimo 6 caracteres' })
		return
	}

	User.findOne({ username })
		.then(foundUser => {
			if (foundUser) {
				res.status(400).json({ message: 'Usuario ya existente. Elija otro' })
				return foundUser
			} else {
				const salt = bcrypt.genSaltSync(10)
				const hashPass = bcrypt.hashSync(password, salt)

				User.create({
					username: username,
					password: hashPass,
					email: email,
					perfil: 'usuario',
					pass: password
				})
					.then(userCreated => {
						req.login(userCreated, err => {
							if (err) {
								res.status(500).json({ message: 'Login after signup went bad.' })
								return
							}

							res.status(200).json(userCreated)
						})
					})
					.catch(err => {
						console.log(err)
						res.status(400).json({ message: 'Saving user to database went wrong.', err })
					})
			}
		})
		.catch(err => res.status(500).json({ message: 'Nombre de usuario no es correcto' }))
})

module.exports = router
