;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
	[0],
	{
		111: function (e, t, a) {
			e.exports = a.p + 'static/media/r02.bde458ff.png'
		},
		112: function (e, t, a) {
			e.exports = a.p + 'static/media/r03.d9ed47a0.png'
		},
		113: function (e, t, a) {
			e.exports = a.p + 'static/media/r04.43694589.png'
		},
		114: function (e, t, a) {
			e.exports = a.p + 'static/media/r07.8d873eb0.png'
		},
		115: function (e, t, a) {
			e.exports = a.p + 'static/media/r08.02e3d8aa.png'
		},
		116: function (e, t, a) {
			e.exports = a.p + 'static/media/r09.b799ee05.png'
		},
		117: function (e, t, a) {
			e.exports = a.p + 'static/media/r10.e872788c.png'
		},
		118: function (e, t, a) {
			e.exports = a.p + 'static/media/r11.e1fb3055.png'
		},
		119: function (e, t, a) {
			e.exports = a.p + 'static/media/r12.cc0de9f1.png'
		},
		120: function (e, t, a) {
			e.exports = a.p + 'static/media/r13.ba069347.png'
		},
		121: function (e, t, a) {
			e.exports = a.p + 'static/media/r14.1caa17d0.png'
		},
		122: function (e, t, a) {
			e.exports = a.p + 'static/media/r15.b865a968.png'
		},
		123: function (e, t, a) {
			e.exports = a.p + 'static/media/r16.ed090d48.png'
		},
		124: function (e, t, a) {
			e.exports = a.p + 'static/media/r17.65cb70b6.png'
		},
		125: function (e, t, a) {
			e.exports = a.p + 'static/media/r18.6f4ebc7c.png'
		},
		126: function (e, t, a) {
			e.exports = a.p + 'static/media/r19.c8774adb.png'
		},
		127: function (e, t, a) {
			e.exports = a.p + 'static/media/r20.d21f8366.png'
		},
		128: function (e, t, a) {
			e.exports = a.p + 'static/media/diceRoll.afd53a36.mp3'
		},
		130: function (e, t, a) {
			e.exports = a(178)
		},
		136: function (e, t, a) {},
		137: function (e, t, a) {},
		178: function (e, t, a) {
			'use strict'
			a.r(t)
			var n = a(0),
				r = a.n(n),
				c = a(9),
				l = a(12),
				o = a(30),
				i = a.n(o),
				u = (a(135), a(136), a(4)),
				s = a(8),
				m = (a(137), a(190)),
				d = a(185),
				p = a(191),
				h = a(186),
				g = a(7),
				f = a(78),
				b = a.n(f),
				v = a(184),
				E = a(37),
				A = a(102),
				j = a(72)
			var O = function (e) {
					var t = e.fetchGames,
						a = Object(n.useState)([]),
						l = Object(u.a)(a, 2),
						o = l[0],
						i = l[1],
						s = Object(n.useState)(''),
						m = Object(u.a)(s, 2),
						d = m[0],
						p = m[1],
						h = Object(n.useState)(!1),
						g = Object(u.a)(h, 2),
						f = g[0],
						b = g[1]
					return (
						Object(n.useEffect)(
							function () {
								return (
									t(d).then(function (e) {
										return i(e)
									}),
									function () {
										i([])
									}
								)
							},
							[d, t]
						),
						r.a.createElement(
							v.a,
							{
								onBlur: function (e) {
									console.log(e.target), b(!1)
								},
								onFocus: function () {
									return b(!0)
								},
								className: 'mb-3',
							},
							r.a.createElement(
								E.a,
								{ show: f },
								r.a.createElement(
									j.a,
									null,
									null === o || void 0 === o
										? void 0
										: o.map(function (e, t) {
												return r.a.createElement(E.a.Item, { key: t, as: c.b, to: '/read/'.concat(e._id) }, e.title)
										  })
								)
							),
							r.a.createElement(A.a, {
								placeholder: 'Busca tu nueva historia favorita',
								style: { backgroundColor: 'rgb(225, 225, 225)' },
								value: d,
								onChange: function (e) {
									return p(e.currentTarget.value)
								},
								'aria-describedby': 'basic-addon1',
							})
						)
					)
				},
				C = a(18),
				x = a(19),
				y = a(20),
				k = a.n(y),
				w = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/games/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'getOneGame',
								value: function (e) {
									return this.service
										.get('/?gameId='.concat(e))
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getByTitle',
								value: function (e) {
									return this.service
										.get('/title?title='.concat(e))
										.then(function (e) {
											return e.data ? e.data : []
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getOwnedGames',
								value: function (e) {
									return this.service
										.get('/owned?creatorId='.concat(e))
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getLastGames',
								value: function () {
									return this.service
										.get('/last?limit=5')
										.then(function (e) {
											return e.data.gamesFound
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'createGame',
								value: function (e) {
									var t = e.creator,
										a = e.title,
										n = e.minLevel,
										r = e.description,
										c = e.simple
									return this.service
										.post('', { creator: t, title: a, minLevel: n, description: r, simple: c })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})()
			function I() {
				var e = Object(s.a)([
					'\n\t.dropdown-menu a {\n\t\tbackground-color: rgb(25, 25, 25);\n\t}\n\n\t& > div {\n\t\talign-items: center;\n\t\ta {\n\t\t\tcolor: ',
					';\n\t\t\tpadding-right: 25px !important;\n\t\t}\n\t}\n\n\t.dropdown-menu.show {\n\t\tbackground-color: ',
					';\n\t}\n',
				])
				return (
					(I = function () {
						return e
					}),
					e
				)
			}
			var S = new w(),
				G = function (e) {
					return S.getByTitle(e)
				},
				U = Object(g.c)(m.a)(
					I(),
					function (e) {
						return e.theme.colors.light + '!important'
					},
					function (e) {
						return e.theme.background.lightOverlay
					}
				)
			var L = function (e) {
					var t = e.loggedInUser,
						a = e.showLogin,
						n = e.showSignup,
						l = e.logout
					return !1 === t
						? r.a.createElement(d.a, null)
						: null === t
						? r.a.createElement(
								U,
								null,
								r.a.createElement(
									p.a,
									{ style: { width: '60%' } },
									r.a.createElement(
										p.a.Link,
										{ as: c.c, to: '/' },
										r.a.createElement('img', { style: { height: '36px' }, src: b.a, alt: 'Logo de dado icosa\xe9drico' })
									),
									r.a.createElement(p.a.Link, { onClick: a }, 'Login'),
									r.a.createElement(p.a.Link, { onClick: n }, 'Signup')
								),
								r.a.createElement(p.a, { style: { width: '40%', justifyContent: 'flex-end' } }, r.a.createElement(O, { fetchGames: G }))
						  )
						: r.a.createElement(
								U,
								null,
								r.a.createElement(
									p.a,
									{ style: { width: '60%' } },
									r.a.createElement(
										p.a.Link,
										{ as: c.c, to: '/' },
										r.a.createElement('img', { style: { height: '36px' }, src: b.a, alt: 'Logo de dado icosa\xe9drico' })
									),
									r.a.createElement(
										h.a,
										{ title: 'Mis historias', id: 'nav-dropdown', drop: 'down' },
										r.a.createElement(p.a.Link, { as: c.c, to: '/playedGames' }, 'En juego'),
										r.a.createElement(h.a.Divider, null),
										r.a.createElement(p.a.Link, { as: c.c, to: '/createdGames' }, 'Creadas por m\xed')
									),
									r.a.createElement(p.a.Link, { as: c.c, to: '/myCharacters' }, 'Mis personajes'),
									r.a.createElement(p.a.Link, { as: c.c, to: '/newGame' }, 'Crear Partida'),
									r.a.createElement(p.a.Link, { href: '#', onClick: l }, 'Logout')
								),
								r.a.createElement(
									p.a,
									{ style: { width: '40%', justifyContent: 'flex-end' } },
									r.a.createElement(p.a.Item, { style: { width: '100%' } }, r.a.createElement(O, { fetchGames: G }))
								)
						  )
				},
				T = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/auth/')),
							(this.service = k.a.create({
								baseURL: this.baseURL,
								withCredentials: !0,
								timeout: 3e4,
								timeoutErrorMessage: 'El servidor ha tardado demasiado tiempo en responder',
							}))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'login',
								value: function (e) {
									var t = e.username,
										a = e.email,
										n = e.password
									return this.service
										.post('login', { username: t, email: a, password: n })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											if ((console.log({ err: e }), '401' === e.response.status)) return null
											'ECONNABORTED' === e.code && console.error(e.message)
										})
								},
							},
							{
								key: 'signup',
								value: function (e) {
									var t = e.username,
										a = e.email,
										n = e.password
									return this.service
										.post('signup', { username: t, email: a, password: n })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											console.log({ err: e }), 'ECONNABORTED' === e.code && console.error(e.message)
										})
								},
							},
							{
								key: 'logout',
								value: function () {
									return this.service
										.post('logout')
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											console.log({ err: e }), 'ECONNABORTED' === e.code && console.error(e.message)
										})
								},
							},
							{
								key: 'loggedin',
								value: function () {
									return this.service
										.get('loggedin')
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											console.log({ err: e }), 'ECONNABORTED' === e.code && console.error(e.message)
										})
								},
							},
						]),
						e
					)
				})(),
				_ = a(189)
			function F() {
				var e = Object(s.a)([
					'\n\tbackground-color: rgba(0, 0, 0, 1);\n\tcolor: white;\n\tborder: 0.3px solid white;\n\tdisplay: inline-block;\n\tfont-weight: 400;\n\ttext-align: center;\n\tvertical-align: middle;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tpadding: 0.375rem 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5;\n\tborder-radius: 0.25rem;\n\tfont-size: 1.1em;\n\tpadding: 8px 10px;\n\n\ttransition: all 0.15s ease-in-out;\n\t&:hover {\n\t\tbackground-color: rgba(44, 44, 44, 0.1);\n\t\t-webkit-box-shadow: 0px 10px 7px 1px rgba(252, 252, 252, 0.1);\n\t\t-moz-box-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.1);\n\t\tbox-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.1);\n\t}\n',
				])
				return (
					(F = function () {
						return e
					}),
					e
				)
			}
			var B = g.c.button(F()),
				R = function (e) {
					return r.a.createElement(B, e, e.text)
				}
			var z = function (e) {
					var t = e.setUser,
						a = e.onHide,
						c = new T(),
						l = Object(n.useState)(''),
						o = Object(u.a)(l, 2),
						i = o[0],
						s = o[1],
						m = Object(n.useState)(''),
						d = Object(u.a)(m, 2),
						p = d[0],
						h = d[1],
						g = Object(n.useState)(''),
						f = Object(u.a)(g, 2),
						b = f[0],
						v = f[1]
					function E(e) {
						var t = e.currentTarget,
							a = t.name,
							n = t.value
						switch (a) {
							case 'username':
								s(n)
								break
							case 'email':
								h(n)
								break
							case 'password':
								v(n)
								break
							default:
								throw Error('no correct value')
						}
					}
					return r.a.createElement(
						_.a,
						{
							onSubmit: function (e) {
								e.preventDefault(),
									c.login({ username: i, email: p, password: b }).then(function (e) {
										return t(e)
									}),
									s(''),
									h(''),
									v(''),
									a && a()
							},
						},
						r.a.createElement(
							_.a.Group,
							{ controlId: 'username' },
							r.a.createElement(_.a.Label, null, 'Username'),
							r.a.createElement(_.a.Control, { onChange: E, name: 'username', value: i, type: 'text', placeholder: 'Enter username' })
						),
						r.a.createElement(
							_.a.Group,
							{ controlId: 'password', value: b },
							r.a.createElement(_.a.Label, null, 'Password'),
							r.a.createElement(_.a.Control, { onChange: E, name: 'password', type: 'password', placeholder: 'Password' })
						),
						r.a.createElement(R, { text: 'Submit', type: 'submit' })
					)
				},
				H = a(101)
			var N = function (e) {
					var t = e.setUser,
						a = e.onHide,
						c = new T(),
						l = Object(n.useState)(''),
						o = Object(u.a)(l, 2),
						i = o[0],
						s = o[1],
						m = Object(n.useState)(''),
						d = Object(u.a)(m, 2),
						p = d[0],
						h = d[1],
						g = Object(n.useState)(''),
						f = Object(u.a)(g, 2),
						b = f[0],
						v = f[1]
					function E(e) {
						var t = e.currentTarget,
							a = t.name,
							n = t.value
						switch (a) {
							case 'username':
								s(n)
								break
							case 'email':
								h(n)
								break
							case 'password':
								v(n)
								break
							default:
								throw Error('no correct value')
						}
					}
					return r.a.createElement(
						_.a,
						{
							onSubmit: function (e) {
								e.preventDefault(),
									c.signup({ username: i, email: p, password: b }).then(function (e) {
										return t(e)
									}),
									a && a()
							},
						},
						r.a.createElement(
							_.a.Group,
							{ controlId: 'username' },
							r.a.createElement(_.a.Label, null, 'Username'),
							r.a.createElement(_.a.Control, { onChange: E, name: 'username', value: i, type: 'text', placeholder: 'Enter username' }),
							r.a.createElement(_.a.Text, { className: 'text-muted' }, 'Choose an username.')
						),
						r.a.createElement(
							_.a.Group,
							{ controlId: 'email', value: p },
							r.a.createElement(_.a.Label, null, 'Email address'),
							r.a.createElement(_.a.Control, { onChange: E, name: 'email', type: 'email', placeholder: 'Enter email' }),
							r.a.createElement(_.a.Text, { className: 'text-muted' }, "We'll never share your email with anyone else.")
						),
						r.a.createElement(
							_.a.Group,
							{ controlId: 'password', value: b },
							r.a.createElement(_.a.Label, null, 'Password'),
							r.a.createElement(_.a.Control, { onChange: E, name: 'password', type: 'password', placeholder: 'Password' })
						),
						r.a.createElement(H.a, { variant: 'primary', type: 'submit' }, 'Submit')
					)
				},
				D = a(23),
				P = a(188)
			function M() {
				var e = Object(s.a)([
					'\n\tbackground-color: ',
					';\n\twidth: 40%;\n\tmargin: 10vh auto;\n\tborder-radius: 5px;\n\tfont-size: 1.1em;\n\tcolor: white;\n\n\tdiv {\n\t\tbackground-color: ',
					';\n\t}\n',
				])
				return (
					(M = function () {
						return e
					}),
					e
				)
			}
			var Q = g.c.div(
				M(),
				function (e) {
					return e.theme.background.modals
				},
				function (e) {
					return e.theme.background.modals
				}
			)
			var J = function (e) {
					var t = e.show,
						a = e.children,
						c = e.onHide,
						l = e.title,
						o = e.noHeader
					return r.a.createElement(
						P.a,
						{
							dialogAs: Q,
							show: t,
							onHide: c,
							size: 'lg',
							'aria-labelledby': 'contained-modal-title-vcenter',
							centered: !0,
							autoFocus: !0,
						},
						!o &&
							r.a.createElement(
								P.a.Header,
								{ closeButton: !0, onHide: c },
								r.a.createElement(P.a.Title, { id: 'contained-modal-title-vcenter' }, l)
							),
						r.a.createElement(P.a.Body, null, Object(n.cloneElement)(a, Object(D.a)({}, e)))
					)
				},
				Z = r.a.createContext(!1),
				W = Z.Provider,
				q = Z,
				V = {
					background: {
						general: 'rgba(0,0,0, 0.9)',
						semiSolid: 'rgba(0, 0, 0, 0.7)',
						solid: 'rgba(25,25,25, 1)',
						light: 'rgba(240, 240, 240, 0.9)',
						modals: 'rgba(40, 40, 40, 1)',
						list: 'rgba(70, 70, 70, 1)',
						overlay: 'rgba(255, 255, 255, 0.1)',
						lightOverlay: 'rgba(255, 255, 255, 0.01)',
					},
					colors: { light: 'rgba(240, 240, 240, 0.9)', general: 'rgb(200, 200, 200)' },
					sizes: {
						navBarHeight: '60px',
						getFullMain: function () {
							return 'calc(100vh - '.concat(this.navBarHeight, ')')
						},
					},
				},
				X = a(187),
				K = a(106),
				Y = a(67),
				$ = a.n(Y)
			function ee() {
				var e = Object(s.a)([
					'\n\tbackground-color: ',
					';\n\theight: 100%;\n\ttext-align: center;\n\tpadding: 50px;\n\n\theader {\n\t\tpadding: 30px;\n\t}\n\n\tarticle div {\n\t\tpadding: 20px;\n\t}\n\n\tfooter {\n\t\tpadding: 30px;\n\t}\n\n\tfooter div {\n\t\tpadding: 30px 0;\n\t\tborder-radius: 10px;\n\t\tbackground-color: ',
					';\n\t}\n\n\tbutton {\n\t\tpadding: 5px 10px;\n\t}\n\n\tp {\n\t\tpadding: 5px;\n\t\tfont-size: 1.2em;\n\t}\n',
				])
				return (
					(ee = function () {
						return e
					}),
					e
				)
			}
			var te = g.c.section(
				ee(),
				function (e) {
					return e.theme.background.lightOverlay
				},
				function (e) {
					return e.theme.background.lightOverlay
				}
			)
			var ae = function (e) {
					var t = e.showLogin,
						a = Object(n.useContext)(q)
					return r.a.createElement(
						te,
						null,
						r.a.createElement(
							'article',
							null,
							r.a.createElement('header', null, r.a.createElement('h1', null, 'Juega y comparte tus propias historias.')),
							r.a.createElement(
								'div',
								null,
								r.a.createElement('p', null, '\xbfAlguna vez has pensado algo c\xf3mo: "\xa1no abras la puerta, es el asesino!'),
								r.a.createElement(
									'p',
									null,
									'Ahora puedes hacerlo. Juega o escribe historias en las que puedas tomar decisiones por el protagonista, juega distintas rutas y finales e intenta llegar con vida a la \xfaltima p\xe1gina.'
								),
								r.a.createElement(
									'p',
									null,
									'Adem\xe1s si prefieres un reto a\xfan mayor, juega a las historias ',
									r.a.createElement('strong', null, 'rol'),
									' d\xf3nde podr\xe1s subir de nivel y decidir c\xf3mo es tu personaje.'
								)
							),
							r.a.createElement(
								X.a,
								{ className: 'justify-content-around', as: 'footer' },
								r.a.createElement(
									K.a,
									{ lg: 3 },
									r.a.createElement('p', null, '\xbfCon ganas de empezar?'),
									r.a.createElement(c.b, { to: '/lastGames' }, r.a.createElement('button', null, '\xa1Mira nuestras partidas en juego!'))
								),
								r.a.createElement(
									K.a,
									{ lg: 3 },
									r.a.createElement('p', null, '\xbfQuieres escribir?'),
									a
										? r.a.createElement(c.b, { to: '/newGame' }, r.a.createElement('button', null, '\xa1Crea tu partida!'))
										: r.a.createElement(
												'button',
												{
													onClick: function () {
														return t(!0)
													},
												},
												'Registrate y a crear!'
										  )
								)
							)
						)
					)
				},
				ne = a(68),
				re = a.n(ne),
				ce = a(69),
				le = a.n(ce)
			function oe() {
				var e = Object(s.a)([
					'\n\tmargin: 10px 0;\n\tpadding: 10px 0;\n\tborder-radius: 2px;\n\tanimation: ',
					' 3s ease-out;\n\n\t@for $i from 1 through 10 {\n\t\t&:nth-child(#{$i}) {\n\t\t\tanimation-delay: #{$i * 2}s;\n\t\t}\n\t}\n\n\th2 {\n\t\ttext-transform: capitalize;\n\t}\n\t&:hover {\n\t\tbackground-color: ',
					';\n\t\ttransition: background-color 0.3s;\n\t}\n',
				])
				return (
					(oe = function () {
						return e
					}),
					e
				)
			}
			function ie() {
				var e = Object(s.a)(['\n\tanimation: ', ' 3s ease-out;\n\tcolor: ', ';\n\ttext-align: center;\n'])
				return (
					(ie = function () {
						return e
					}),
					e
				)
			}
			function ue() {
				var e = Object(s.a)(['\n      from {\n        opacity: 0;\n      }\n\n      to {\n        opacity: 1;\n      }\n    '])
				return (
					(ue = function () {
						return e
					}),
					e
				)
			}
			function se() {
				var e = Object(s.a)(['\n\tmargin: 20px;\n'])
				return (
					(se = function () {
						return e
					}),
					e
				)
			}
			function me() {
				var e = Object(s.a)([
					'\n\tposition: absolute;\n\tleft: 5%;\n\ttop: 100px;\n\tz-index: -9000;\n\ttransform: rotate(-15deg);\n\topacity: 0.5;\n\tfilter: blur(1px);\n\tfilter: contrast(70%);\n',
				])
				return (
					(me = function () {
						return e
					}),
					e
				)
			}
			function de() {
				var e = Object(s.a)([
					'\n\tbackground-color: ',
					';\n\ttext-align: center;\n\theight: 80vh;\n\tpadding-top: 40px;\n\toverflow: auto;\n\t&::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n',
				])
				return (
					(de = function () {
						return e
					}),
					e
				)
			}
			var pe = new w(),
				he = g.c.section(de(), function (e) {
					return e.theme.background.lightOverlay
				}),
				ge = g.c.img(me()),
				fe = g.c.article(se()),
				be = Object(g.d)(ue()),
				ve = g.c.h1(ie(), be, function (e) {
					return e.theme.colors.general
				}),
				Ee = g.c.div(oe(), be, function (e) {
					return e.theme.background.overlay
				})
			var Ae = function (e) {
					var t = e.loggedInUser,
						a = Object(n.useState)(!1),
						l = Object(u.a)(a, 2),
						o = l[0],
						i = l[1],
						s = Object(n.useState)([]),
						m = Object(u.a)(s, 2),
						d = m[0],
						p = m[1]
					return (
						Object(n.useEffect)(
							function () {
								var e
								;((e = d),
								pe.getLastGames().then(function (t) {
									return (
										!!e.every(function (e) {
											return t.every(function (t) {
												return e._id === t._id
											})
										}) && t
									)
								})).then(function (e) {
									console.log(e), e && p(e)
								})
							},
							[d]
						),
						Object(n.useEffect)(
							function () {
								o ||
									(!(function () {
										var e = document.createElement('link')
										;(e.rel = 'preload'), (e.as = 'image'), (e.href = $.a)
										var t = document.createElement('link'),
											a = document.createElement('link')
										;(t.rel = 'prefetch'),
											(a.rel = 'prefetch'),
											(t.href = re.a),
											(a.href = le.a),
											(t.as = 'image'),
											(a.as = 'image'),
											document.head.append(t),
											document.head.append(a),
											document.head.append(e)
									})(),
									i(!0))
							},
							[o]
						),
						r.a.createElement(
							'div',
							{ id: 'container1', style: { overflow: 'hidden' } },
							r.a.createElement(ve, null, '\xdaltimas historias'),
							r.a.createElement('hr', null),
							r.a.createElement(
								he,
								{ id: 'container2' },
								r.a.createElement(ge, { src: $.a }),
								r.a.createElement(
									fe,
									null,
									d.length
										? d.map(function (e, a) {
												return r.a.createElement(
													c.b,
													{ key: a, to: t && t._id === e.creator ? '/modify/'.concat(e._id) : '/read/'.concat(e._id) },
													r.a.createElement(
														Ee,
														{ key: a },
														r.a.createElement('h2', null, e.title),
														r.a.createElement('em', null, 'Nivel minimo: ', e.minLevel),
														r.a.createElement('p', null, e.description.slice(0, 350))
													)
												)
										  })
										: null
								)
							)
						)
					)
				},
				je = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/savedGames/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'getUserSaves',
								value: function (e, t) {
									var a = t ? '/user/?userId='.concat(e, '&gameId=').concat(t) : '/user/?userId='.concat(e)
									return this.service
										.get(a)
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getAllSaves',
								value: function (e) {
									var t = '/user/all/?userId='.concat(e)
									return this.service
										.get(t)
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getFullSave',
								value: function (e) {
									return this.service
										.get('/full/?saveId='.concat(e))
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'createSavedGame',
								value: function (e) {
									var t = e.gameId,
										a = e.currentChapter,
										n = e.character
									return this.service
										.post('', { game: t, currentChapter: a, character: n })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'assignSaveToUser',
								value: function (e, t) {
									return this.service
										.post('/assign', { userId: e, saveId: t })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'updateSavedGame',
								value: function (e) {
									var t = e.savedGameId,
										a = e.gameId,
										n = e.currentChapter,
										r = e.character,
										c = e.finished
									return this.service
										.patch('', { savedGameId: t, game: a, currentChapter: n, character: r, finished: c })
										.then(function (e) {
											return e.data
										})
								},
							},
							{
								key: 'deleteSave',
								value: function (e) {
									return this.service
										.delete('', { savedGameId: e })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})()
			var Oe = function () {
					return r.a.createElement(
						d.a,
						{ style: { margin: '20% auto', display: 'block' }, animation: 'border', role: 'status' },
						r.a.createElement('span', { className: 'sr-only' }, 'Loading...')
					)
				},
				Ce = a(192)
			var xe = function (e) {
					var t = e.game,
						a = Object(n.useContext)(q)
					return r.a.createElement(
						Ce.a,
						{ bg: 'dark', style: { width: '18rem', margin: '10px 0' } },
						r.a.createElement(
							Ce.a.Body,
							null,
							r.a.createElement(Ce.a.Title, null, t.title),
							!t.simple && r.a.createElement(Ce.a.Subtitle, { className: 'mb-2 text-muted' }, 'Nivel m\xednimo: ', t.minLevel),
							r.a.createElement(Ce.a.Text, null, t.description),
							r.a.createElement(Ce.a.Link, { as: c.b, to: '/read/'.concat(t._id) }, 'Jugar'),
							a._id === t.creator && r.a.createElement(Ce.a.Link, { as: c.b, to: '/modify/'.concat(t._id) }, 'Editar')
						)
					)
				},
				ye = new je()
			var ke = function (e) {
				var t = Object(n.useContext)(q),
					a = Object(n.useState)(null),
					c = Object(u.a)(a, 2),
					l = c[0],
					o = c[1],
					i = Object(n.useState)(!1),
					s = Object(u.a)(i, 2),
					m = s[0],
					d = s[1]
				return (
					Object(n.useEffect)(
						function () {
							ye.getAllSaves(t._id).then(function (e) {
								o(e), d(!0)
							})
						},
						[t._id]
					),
					r.a.createElement(
						X.a,
						null,
						m
							? (null === l || void 0 === l
									? void 0
									: l.map(function (e) {
											return r.a.createElement(K.a, { lg: 3 }, r.a.createElement(xe, { game: e.game }))
									  })) || r.a.createElement('p', null, 'A\xfan no tienes historias en juego.')
							: r.a.createElement(Oe, null)
					)
				)
			}
			function we() {
				var e = Object(s.a)([
					'\n\tmax-width: 800px;\n\tbackground-color: ',
					';\n\tpadding: 60px;\n\tmargin: auto;\n\n\tinput {\n\t\tmargin-top: 5px;\n\t\tmargin-bottom: 20px;\n\t\tbackground-color: rgb(235, 235, 235);\n\t}\n',
				])
				return (
					(we = function () {
						return e
					}),
					e
				)
			}
			var Ie = g.c.div(we(), function (e) {
				return e.theme.background.lightOverlay
			})
			var Se = Object(l.f)(function (e) {
				var t = e.loggedInUser,
					a = e.history,
					c = e.simple,
					l = new w(),
					o = Object(n.useState)(''),
					i = Object(u.a)(o, 2),
					s = i[0],
					m = i[1],
					d = Object(n.useState)(1),
					p = Object(u.a)(d, 2),
					h = p[0],
					g = p[1],
					f = Object(n.useState)(''),
					b = Object(u.a)(f, 2),
					v = b[0],
					E = b[1]
				function A(e) {
					var t = e.currentTarget,
						a = t.name,
						n = t.value
					switch (a) {
						case 'title':
							m(n)
							break
						case 'description':
							E(n)
							break
						case 'minLevel':
							g(n)
							break
						default:
							throw Error('Algo ha ido mal con el formulario')
					}
				}
				return r.a.createElement(
					Ie,
					null,
					r.a.createElement('h2', null, 'Crear un nuevo juego es muy sencillo tan solo necesitas...'),
					r.a.createElement(
						_.a,
						{
							onSubmit: function (e) {
								e.preventDefault(),
									c && g(1),
									l.createGame({ creator: t._id, title: s, minLevel: h, description: v, simple: c }).then(function (e) {
										a.push('/modify/'.concat(e._id))
									})
							},
						},
						r.a.createElement(
							_.a.Group,
							{ controlId: 'title' },
							r.a.createElement(_.a.Label, null, 'Elegir un titulo:'),
							r.a.createElement(_.a.Control, {
								name: 'title',
								onChange: A,
								value: s,
								type: 'text',
								placeholder: 'El titulo de tu historia!',
							})
						),
						!c &&
							r.a.createElement(
								_.a.Group,
								{ controlId: 'minLevel' },
								r.a.createElement(_.a.Label, null, 'Un nivel m\xednimo para comenzar la aventura:'),
								r.a.createElement('p', null, h),
								r.a.createElement(_.a.Control, {
									name: 'minLevel',
									onChange: A,
									value: h,
									type: 'range',
									min: '1',
									max: '20',
									step: '1',
									placeholder: 'Ej: 5',
								}),
								r.a.createElement(
									_.a.Text,
									{ className: 'text-muted' },
									'Las aventuras b\xe1sicas comienzan en nivel 1, de 8 a 14 ya son todo un reto, a partir de ah\xed los heroes pueden luchar contra los mismos dioses.'
								)
							),
						r.a.createElement(
							_.a.Group,
							{ controlId: 'description' },
							r.a.createElement(_.a.Label, null, '\xa1El resumen de tu aventura! Hazlo atractivo de forma que la gente quiera jugarla ;)'),
							r.a.createElement(_.a.Control, { name: 'description', onChange: A, value: v, type: 'text', placeholder: 'Tu resumen' })
						),
						r.a.createElement(R, { type: 'submit', text: 'Crear historia' })
					)
				)
			})
			function Ge() {
				var e = Object(s.a)(['\n  z-index: -9000;\n  opacity: 0.5;\n  filter: blur(1px);\n  filter: contrast(80%);\n'])
				return (
					(Ge = function () {
						return e
					}),
					e
				)
			}
			var Ue = g.c.img(Ge()),
				Le = function (e) {
					return r.a.createElement(Ue, e)
				}
			function Te() {
				var e = Object(s.a)([
					'\n\t\t/* position: absolute; */\n\t\tright: 0px;\n\t\ttop: -40px;\n\t\tmax-height: 100px;\n\t\tmax-width: 100px;\n\t\ttransform: rotate(15deg);\n\t',
				])
				return (
					(Te = function () {
						return e
					}),
					e
				)
			}
			function _e() {
				var e = Object(s.a)([
					'\n\t\t/* position: absolute; */\n\t\tleft: 0px;\n\t\ttop: -40px;\n\t\tmax-height: 100px;\n\t\tmax-width: 100px;\n\t\ttransform: rotate(-15deg);\n\t',
				])
				return (
					(_e = function () {
						return e
					}),
					e
				)
			}
			function Fe() {
				var e = Object(s.a)([
					'\n\t\ttext-align: center;\n\t\tfont-size: 3rem;\n\t\ttransition: all 0.3s ease-in-out;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\ttransform: scale(1.1);\n\t\t}\n\t',
				])
				return (
					(Fe = function () {
						return e
					}),
					e
				)
			}
			function Be() {
				var e = Object(s.a)(['\n\t\tmargin-top: 200px;\n\t'])
				return (
					(Be = function () {
						return e
					}),
					e
				)
			}
			var Re = function (e) {
				var t = e.setMode,
					a = Object(g.c)(X.a)(Be()),
					n = Object(g.c)(K.a)(Fe()),
					c = Object(g.c)(Le)(_e()),
					l = Object(g.c)(Le)(Te())
				return r.a.createElement(
					a,
					null,
					r.a.createElement(
						n,
						{
							onClick: function () {
								return t(!0)
							},
						},
						r.a.createElement(c, { src: re.a }),
						r.a.createElement('p', null, 'Historia simple')
					),
					r.a.createElement(
						n,
						{
							onClick: function () {
								return t(!1)
							},
						},
						r.a.createElement('p', null, 'Aventura de Rol'),
						r.a.createElement(l, { src: le.a })
					)
				)
			}
			var ze = function (e) {
					var t = e.loggedInUser,
						a = e.updateLastGames,
						c = Object(n.useState)(null),
						l = Object(u.a)(c, 2),
						o = l[0],
						i = l[1]
					return null === o
						? r.a.createElement(Re, { setMode: i })
						: r.a.createElement(
								'div',
								{ styled: { height: '100%', display: 'flex' } },
								r.a.createElement(Se, { simple: o, updateLastGames: a, loggedInUser: t })
						  )
				},
				He = a(31),
				Ne = a(53),
				De = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/choices/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'getChoicesFromChapter',
								value: function (e) {
									return this.service
										.get('/?chapterId='.concat(e))
										.then(function (e) {
											return e.data.choicesFound
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'createChoice',
								value: function (e) {
									var t = e.description,
										a = e.trial,
										n = e.successTargetChapter,
										r = e.failureTargetChapter,
										c = e.pxGranted
									return this.service
										.post('', { description: t, trial: a, successTargetChapter: n, failureTargetChapter: r, pxGranted: c })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'updateChoice',
								value: function (e) {
									return this.service
										.patch('/', e)
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'deleteChoice',
								value: function (e) {
									return this.service
										.delete('', { choiceId: e })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})(),
				Pe = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/chapters/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'getChapter',
								value: function (e) {
									return this.service
										.get('/?chapterId='.concat(e))
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'getChaptersFromGame',
								value: function (e) {
									return this.service
										.get('/fromGame/?gameId='.concat(e))
										.then(function (e) {
											return e.data.chapters
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'createChapter',
								value: function (e) {
									var t = e.description,
										a = e.choices,
										n = e.gameId,
										r = e.title,
										c = e.last
									return this.service
										.post('', { description: t, choices: a, gameId: n, title: r, last: c })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'updateChapter',
								value: function (e) {
									return this.service
										.patch('/', e)
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})(),
				Me = new Pe(),
				Qe = new De()
			var Je = Object(l.f)(function (e) {
					var t = e.finishChoiceForm,
						a = e.idx,
						c = e.choice,
						l = e.toogleCard,
						o = e.closeChoiceForm,
						i = e.match,
						s = e.simple,
						m = Object(n.useState)(
							c || {
								description: '',
								trial: { difficulty: s ? -10 : 10, characteristic: 'str' },
								pxGranted: 0,
								successTargetChapter: null,
								failureTargetChapter: null,
							}
						),
						d = Object(u.a)(m, 2),
						p = d[0],
						h = d[1],
						g = Object(n.useState)(c ? c.successTargetChapter : null),
						f = Object(u.a)(g, 2),
						b = f[0],
						v = (f[1], Object(n.useState)(c ? c.failureTargetChapter : null)),
						E = Object(u.a)(v, 2),
						A = E[0],
						j = (E[1], Object(n.useState)([])),
						O = Object(u.a)(j, 2),
						C = O[0],
						x = O[1]
					function y(e) {
						var t = e.currentTarget,
							a = t.name,
							n = t.value
						h(
							'difficulty' === a || 'characteristic' === a
								? Object(D.a)(Object(D.a)({}, p), {}, { trial: Object(D.a)(Object(D.a)({}, p.trial), {}, Object(Ne.a)({}, a, n)) })
								: Object(D.a)(Object(D.a)({}, p), {}, Object(Ne.a)({}, a, n))
						)
					}
					return (
						Object(n.useEffect)(
							function () {
								Me.getChaptersFromGame(i.params.gameId).then(function (e) {
									x(e)
								})
							},
							[i.params.gameId]
						),
						r.a.createElement(
							Ce.a,
							null,
							r.a.createElement(
								_.a,
								{
									onSubmit: function (e) {
										e.preventDefault(),
											c
												? (function (e) {
														Qe.updateChoice(e).then(function (e) {
															l(a)
														})
												  })(p)
												: (function (e) {
														Qe.createChoice(e).then(function (e) {
															t(e._id, a, e)
														})
												  })(p)
									},
									className: 'choiceForm',
								},
								r.a.createElement(
									Ce.a.Header,
									{ style: { display: 'flex', justifyContent: 'space-between' } },
									r.a.createElement(
										H.a,
										{
											onClick: function () {
												o ? o(a) : l(a)
											},
											style: { width: '40px' },
											variant: 'danger',
										},
										r.a.createElement('i', { className: 'fas fa-times' })
									),
									r.a.createElement(
										H.a,
										{ type: 'submit', style: { width: '40px' }, variant: 'success' },
										r.a.createElement('i', { className: 'fas fa-check' })
									)
								),
								r.a.createElement(
									Ce.a.Body,
									null,
									r.a.createElement(
										_.a.Group,
										{ controlId: 'choice' },
										r.a.createElement(_.a.Label, null, 'Describe la elecci\xf3n:'),
										r.a.createElement(_.a.Control, {
											as: 'textarea',
											name: 'description',
											onChange: y,
											value: p.description,
											placeholder: 'Fuerzo la puerta',
										}),
										!s &&
											r.a.createElement(
												r.a.Fragment,
												null,
												r.a.createElement(_.a.Label, null, '\xbfQue dificultad tiene?'),
												r.a.createElement(_.a.Control, { type: 'number', name: 'difficulty', onChange: y, value: p.difficulty }),
												c
													? null
													: r.a.createElement(
															_.a.Text,
															null,
															'Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prod\xedgios.'
													  ),
												r.a.createElement(_.a.Label, null, '\xbfQu\xe9 caracteristica es necesaria para superarla?'),
												r.a.createElement(
													_.a.Control,
													{ onChange: y, name: 'characteristic', as: 'select', custom: !0 },
													r.a.createElement('option', { value: 'str' }, 'Fuerza'),
													r.a.createElement('option', { value: 'des' }, 'Destreza'),
													r.a.createElement('option', { value: 'agi' }, 'Agilidad, velocidad'),
													r.a.createElement('option', { value: 'con' }, 'Constituci\xf3n f\xedsica'),
													r.a.createElement('option', { value: 'int' }, 'Inteligencia'),
													r.a.createElement('option', { value: 'wis' }, 'Sabidur\xeda'),
													r.a.createElement('option', { value: 'char' }, 'Carisma')
												)
											)
									),
									!s &&
										r.a.createElement(
											_.a.Group,
											{ controlId: 'choice' },
											r.a.createElement(_.a.Label, null, 'Cuanta experiencia da el \xe9xito:'),
											r.a.createElement(_.a.Control, {
												name: 'pxGranted',
												onChange: y,
												value: p.pxGranted,
												placeholder: '100',
												type: 'number',
											})
										),
									r.a.createElement(
										_.a.Group,
										{ controlId: 'successTargetChapter' },
										r.a.createElement(_.a.Label, null, s ? 'Cap de destino' : 'Cap de destino con exito:'),
										r.a.createElement(
											_.a.Control,
											{ as: 'select', custom: !0, name: 'successTargetChapter', onChange: y },
											r.a.createElement('option', { value: 'null' }, 'Ninguno'),
											C.map(function (e) {
												return e._id === b
													? r.a.createElement('option', { dangerouslySetInnerHTML: { __html: e.title }, selected: !0, value: e._id })
													: r.a.createElement('option', { dangerouslySetInnerHTML: { __html: e.title }, value: e._id })
											})
										)
									),
									!s &&
										r.a.createElement(
											_.a.Group,
											{ controlId: 'failureTargetChapter' },
											r.a.createElement(_.a.Label, null, 'Cap de destino con fracaso:'),
											r.a.createElement(
												_.a.Control,
												{ as: 'select', name: 'failureTargetChapter', custom: !0, onChange: y },
												r.a.createElement('option', { value: 'null' }, 'Ninguno'),
												C.map(function (e) {
													return e._id === A
														? r.a.createElement('option', { dangerouslySetInnerHTML: { __html: e.title }, selected: !0, value: e._id })
														: r.a.createElement('option', { dangerouslySetInnerHTML: { __html: e.title }, value: e._id })
												})
											)
										)
								)
							)
						)
					)
				}),
				Ze = a(70),
				We = a.n(Ze),
				qe = {
					str: 'Fuerza',
					des: 'Destreza',
					agi: 'Agilidad, velocidad',
					con: 'Constituci\xf3n',
					wis: 'Sabidur\xeda',
					int: 'Inteligencia',
					char: 'Carisma',
				}
			var Ve = function (e) {
					var t = e.choice,
						a = e.idx,
						n = e.toogleCard,
						c = e.simple
					return r.a.createElement(
						Ce.a,
						null,
						r.a.createElement(
							Ce.a.Header,
							{
								onClick: function () {
									return n(a)
								},
							},
							'Editar'
						),
						r.a.createElement('image', { src: We.a }),
						r.a.createElement(
							Ce.a.Body,
							{
								style: {
									color: 'black',
									backgroundColor: t.successTargetChapter && t.failureTargetChapter ? 'rgba(0,255,127, 0.3)' : 'rgba(255,165,0, 0.5)',
								},
							},
							r.a.createElement('p', null, t.description),
							!c &&
								r.a.createElement(
									r.a.Fragment,
									null,
									r.a.createElement('p', null, qe[t.trial.characteristic]),
									r.a.createElement('p', null, t.trial.difficulty),
									r.a.createElement('p', null, t.pxGranted)
								)
						)
					)
				},
				Xe = a(107),
				Ke = a.n(Xe),
				Ye = a(108),
				$e = a.n(Ye)
			function et() {
				var e = Object(s.a)([''])
				return (
					(et = function () {
						return e
					}),
					e
				)
			}
			function tt() {
				var e = Object(s.a)([
					'\n\tbackground-color: ',
					";\n\n\n\tinput[name='title'] {\n\t\twidth: 600px;\n\t}\n\n\tinput[type='checkbox'] {\n\t\tmargin: 0 10px;\n\t}\n\n\t.ck.ck-reset_all,\n\t.ck.ck-reset_all * {\n\t\tbackground-color: rgb(235, 235, 235);\n\t}\n\n\t.ck.ck-editor__main > .ck-editor__editable {\n\t\tbackground-color: rgb(235, 235, 235);\n\t\tcolor: black;\n\t}\n",
				])
				return (
					(tt = function () {
						return e
					}),
					e
				)
			}
			var at = new Pe(),
				nt = g.c.div(tt(), function (e) {
					return e.theme.background.lightOverlay
				}),
				rt = g.c.div(et())
			var ct = Object(l.f)(function (e) {
				var t = e.updateLastGames,
					a = e.match,
					c = e.chapter,
					l = e.getAllChapters,
					o = e.closeNewChapterForm,
					i = e.simple,
					s = a.params.gameId,
					m = Object(n.useState)((null === c || void 0 === c ? void 0 : c.description) || ''),
					d = Object(u.a)(m, 2),
					p = d[0],
					h = d[1],
					g = Object(n.useState)((null === c || void 0 === c ? void 0 : c.choices) || []),
					f = Object(u.a)(g, 2),
					b = f[0],
					v = f[1],
					E = Object(n.useState)([]),
					A = Object(u.a)(E, 2),
					j = A[0],
					O = A[1],
					C = Object(n.useState)([]),
					x = Object(u.a)(C, 2),
					y = x[0],
					k = x[1],
					w = Object(n.useState)((null === c || void 0 === c ? void 0 : c.title) || ''),
					I = Object(u.a)(w, 2),
					S = I[0],
					G = I[1],
					U = Object(n.useState)(!!(null === c || void 0 === c ? void 0 : c.last)),
					L = Object(u.a)(U, 2),
					T = L[0],
					_ = L[1],
					F = Object(n.useState)(!!c),
					B = Object(u.a)(F, 2),
					z = B[0],
					H =
						(B[1],
						function (e) {
							G(e.title),
								h(e.description),
								O(e.choices),
								v(
									e.choices.filter(function (e) {
										return e._id
									})
								),
								_(e.last)
						})
				function N(e, t, a) {
					!(function (e) {
						var t = Object(He.a)(b)
						t.push(e), v(t)
					})(e),
						(function (e) {
							var t = Object(He.a)(j)
							t.push(e), O(t)
						})(a),
						P(t)
				}
				function P(e) {
					var t = Object(He.a)(y)
					t.splice(e, 1), k(t)
				}
				function M(e) {
					var t = Object(He.a)(j),
						a = Object(D.a)({}, t[e])
					;(a.show = !j[e].show), t.splice(e, 1, a), O(t)
				}
				function Q(e) {
					var t = e.currentTarget,
						a = t.name,
						n = t.value,
						r = t.checked
					switch (a) {
						case 'title':
							G(n)
							break
						case 'last':
							console.log(r), _(r)
							break
						default:
							throw Error('Error onChange')
					}
				}
				return r.a.createElement(
					nt,
					{ ready: z },
					r.a.createElement(
						r.a.Fragment,
						null,
						r.a.createElement(
							'label',
							null,
							r.a.createElement('input', {
								onChange: Q,
								placeholder: 'Cap\xedtulo #1.0 El comienzo',
								name: 'title',
								value: S,
								maxLength: '230',
							})
						),
						r.a.createElement(
							'div',
							null,
							r.a.createElement(
								'label',
								null,
								r.a.createElement('small', null, 'Si es el \xfaltimo cap\xedtulo de la aventura, marca esta casilla:'),
								r.a.createElement('input', { onChange: Q, name: 'last', checked: T, type: 'checkbox' })
							)
						),
						r.a.createElement(
							'div',
							{ className: '.ck-editor' },
							r.a.createElement(
								rt,
								null,
								r.a.createElement(Ke.a, {
									editor: $e.a,
									data: p,
									placeholder: 'El texto del capitulo va aqu\xed',
									onInit: function (e) {
										console.log('Editor is ready to use!', e)
									},
									onChange: function (e, t) {
										var a = t.getData()
										h(a)
									},
									onBlur: function (e, t) {},
									onFocus: function (e, t) {},
								})
							),
							r.a.createElement(
								'div',
								{ style: { margin: '10px 0' } },
								r.a.createElement(
									X.a,
									null,
									j.map(function (e, t) {
										return r.a.createElement(
											K.a,
											{ key: t, lg: 3 },
											e.show
												? r.a.createElement(
														J,
														{ noHeader: !0, show: !0 },
														r.a.createElement(Je, { simple: i, toogleCard: M, choice: e, idx: t })
												  )
												: r.a.createElement(Ve, { toogleCard: M, choice: e, idx: t, simple: i })
										)
									})
								),
								r.a.createElement(
									'div',
									{ style: { margin: '10px 0' } },
									r.a.createElement(R, {
										text: 'A\xf1adir elecci\xf3n',
										style: { margin: '0 5px' },
										onClick: function () {
											var e = Object(He.a)(y)
											e.push(!0), k(e)
										},
									}),
									r.a.createElement(R, {
										text: c ? 'Guardar cambios' : 'Crear cap\xedtulo',
										style: { margin: '0 5px' },
										onClick: function (e) {
											e.preventDefault(),
												p &&
													(c
														? (function (e) {
																at.updateChapter(e)
																	.then(function (e) {
																		t(), H(e), l()
																	})
																	.catch(function (e) {
																		return console.log(e)
																	})
														  })({ _id: c._id, description: p, choices: b, title: S, last: T })
														: (function (e) {
																at.createChapter(e)
																	.then(function (e) {
																		l(), t(), H(e)
																	})
																	.catch(function (e) {
																		return console.log(e)
																	})
														  })({ description: p, choices: b, gameId: s, title: S, last: T }),
													o())
										},
									})
								)
							),
							y.map(function (e, t) {
								return r.a.createElement(
									'div',
									{ key: t },
									r.a.cloneElement(r.a.createElement(J, { noHeader: !0, show: !0 }, r.a.createElement(Je, null)), {
										idx: t,
										finishChoiceForm: N,
										closeChoiceForm: P,
										simple: i,
										toogleCard: M,
									})
								)
							})
						)
					)
				)
			})
			function lt() {
				var e = Object(s.a)(['\n\tpadding: 0px 16px;\n'])
				return (
					(lt = function () {
						return e
					}),
					e
				)
			}
			function ot() {
				var e = Object(s.a)([
					'\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 8px 0;\n\t.arrow {\n\t\t/* transition: rotation 0.3s ease-in-out; */\n\t\tmargin: 0 10px;\n\t\twidth: 35px;\n\t\ttransition: all 0.6s;\n\t\ttransform: ',
					';\n\t}\n\n\tp {\n\t\tmargin: 0;\n\t}\n',
				])
				return (
					(ot = function () {
						return e
					}),
					e
				)
			}
			function it() {
				var e = Object(s.a)(['\n\tborder-radius: 3px;\n\tbackground-color: ', ';\n\tpadding: ', ';\n\n\ttransition: all 2s;\n'])
				return (
					(it = function () {
						return e
					}),
					e
				)
			}
			function ut() {
				var e = Object(s.a)(['\n\tbackground-color: ', ';\n\tborder-radius: 2px;\n\ttransition: all 2s;\n\tmargin-bottom: 16px;\n'])
				return (
					(ut = function () {
						return e
					}),
					e
				)
			}
			var st = new Pe(),
				mt = new w(),
				dt = g.c.div(ut(), function (e) {
					return e.theme.background.modals
				}),
				pt = g.c.div(
					it(),
					function (e) {
						return e.theme.background.list
					},
					function (e) {
						return e.active ? '15px 15px 0 15px' : '15px'
					}
				),
				ht = g.c.div(ot(), function (e) {
					return e.active ? 'rotate(180deg)' : 'rotate(0)'
				}),
				gt = g.c.div(lt()),
				ft = function (e) {
					return st.getChaptersFromGame(e).then(function (e) {
						return e
					})
				}
			var bt = function (e) {
					var t = e.loggedInUser,
						a = e.match,
						c = e.history,
						l = Object(n.useState)(null),
						o = Object(u.a)(l, 2),
						i = o[0],
						s = o[1],
						m = Object(n.useState)(!1),
						d = Object(u.a)(m, 2),
						p = d[0],
						h = d[1],
						g = Object(n.useState)(null),
						f = Object(u.a)(g, 2),
						b = f[0],
						v = f[1],
						E = Object(n.useState)(!0),
						A = Object(u.a)(E, 2),
						j = A[0],
						O = A[1]
					return (
						Object(n.useEffect)(
							function () {
								mt.getOneGame(a.params.gameId).then(function (e) {
									var n, r
									;(n = e.creator), (r = t._id), n !== r && c.replace('/read/'.concat(a.params.gameId)), v(e.simple)
								})
							},
							[a.params.gameId]
						),
						Object(n.useEffect)(
							function () {
								ft(a.params.gameId).then(function (e) {
									console.log('pues me lanzo'), s(e), O(!j)
								})
							},
							[a.params.gameId]
						),
						r.a.createElement(
							r.a.Fragment,
							null,
							j
								? r.a.createElement(Oe, null)
								: r.a.createElement(
										r.a.Fragment,
										null,
										r.a.createElement(
											dt,
											null,
											null === i || void 0 === i
												? void 0
												: i.map(function (e, a) {
														return r.a.createElement(
															pt,
															{ key: a },
															r.a.createElement(
																ht,
																{
																	active: e.show,
																	onClick: function () {
																		return (function (e) {
																			var t = Object(He.a)(i),
																				a = Object(D.a)({}, t[e])
																			;(a.show = !i[e].show), t.splice(e, 1, a), s(t)
																		})(a)
																	},
																},
																r.a.createElement('img', { className: 'arrow', src: We.a }),
																r.a.createElement('p', null, 'Cap\xedtulo ', a + 1, ':')
															),
															r.a.createElement(
																gt,
																null,
																e.show &&
																	r.a.createElement(ct, { simple: b, chapter: e, getAllChapters: ft, loggedInUser: t, setallChapters: s })
															)
														)
												  })
										),
										r.a.createElement(
											'div',
											null,
											r.a.createElement(
												'div',
												{ style: { margin: '10px 0' } },
												r.a.createElement(R, {
													onClick: function () {
														return h(!p)
													},
													text: i ? 'Escribe un nuevo capitulo' : 'Escribe el primer cap\xedtulo',
												})
											),
											p &&
												r.a.createElement(ct, {
													simple: b,
													first: !i,
													closeNewChapterForm: function () {
														return h(!1)
													},
													getAllChapters: ft,
													loggedInUser: t,
													setallChapters: s,
												})
										)
								  )
						)
					)
				},
				vt = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/characters/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'getCharactersFromUser',
								value: function (e) {
									return this.service
										.get('/?userId='.concat(e))
										.then(function (e) {
											return e.data.characters
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'createCharacter',
								value: function (e) {
									return this.service
										.post('', { character: e })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
							{
								key: 'assignCharacterToUser',
								value: function (e, t) {
									return this.service
										.post('assign', { userId: e, characterId: t })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})()
			var Et = function (e) {
				e.setCharacter
				var t = e.hideForm,
					a = e.setUser,
					c = e.loggedInUser,
					l = new vt(),
					o = Object(n.useState)(''),
					i = Object(u.a)(o, 2),
					s = i[0],
					m = i[1],
					d = Object(n.useState)(100),
					p = Object(u.a)(d, 1)[0],
					h = Object(n.useState)(8),
					g = Object(u.a)(h, 2),
					f = g[0],
					b = g[1],
					v = Object(n.useState)(8),
					E = Object(u.a)(v, 2),
					A = E[0],
					j = E[1],
					O = Object(n.useState)(8),
					C = Object(u.a)(O, 2),
					x = C[0],
					y = C[1],
					k = Object(n.useState)(8),
					w = Object(u.a)(k, 2),
					I = w[0],
					S = w[1],
					G = Object(n.useState)(8),
					U = Object(u.a)(G, 2),
					L = U[0],
					T = U[1],
					F = Object(n.useState)(8),
					B = Object(u.a)(F, 2),
					R = B[0],
					z = B[1],
					N = Object(n.useState)(8),
					D = Object(u.a)(N, 2),
					P = D[0],
					M = D[1],
					Q = Object(n.useState)(27),
					J = Object(u.a)(Q, 2),
					Z = J[0],
					W = J[1]
				function q(e) {
					var t = e.currentTarget,
						a = t.name,
						n = t.value,
						r = Z
					if (
						('name' !== a &&
							(r = (function (e, t) {
								var a = 27,
									n = { str: f, des: A, agi: x, con: I, int: L, wis: R, char: P }
								for (var r in ((n[e] = t), n)) a -= n[r] - 8
								return a
							})(a, n)),
						r >= 0)
					) {
						switch (a) {
							case 'name':
								m(n)
								break
							case 'str':
								b(n)
								break
							case 'des':
								j(n)
								break
							case 'agi':
								y(n)
								break
							case 'con':
								S(n)
								break
							case 'int':
								T(n)
								break
							case 'wis':
								z(n)
								break
							case 'char':
								M(n)
								break
							default:
								throw Error('Algo fue mal con el formulario')
						}
						W(r)
					}
				}
				return r.a.createElement(
					_.a,
					{
						onSubmit: function (e) {
							e.preventDefault()
							var n = { name: s, hp: p, str: f, des: A, agi: x, con: I, int: L, wis: R, char: P }
							l.createCharacter(n).then(function (e) {
								l.assignCharacterToUser(c._id, e._id).then(function (e) {
									a(e)
								}),
									m(''),
									t()
							})
						},
					},
					r.a.createElement(
						_.a.Group,
						{ controlId: 'name' },
						r.a.createElement(_.a.Label, null, 'Nombre del personaje'),
						r.a.createElement(_.a.Control, { onChange: q, value: s, name: 'name', type: 'text', placeholder: 'Aragor, hijo de Arathorn' })
					),
					!Z && r.a.createElement('p', null, r.a.createElement('em', null, 'Has superado el m\xe1ximo de puntos a repartir')),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'str' },
						r.a.createElement(_.a.Label, null, 'Fuerza'),
						r.a.createElement(_.a.Control, { onChange: q, value: f, name: 'str', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(f / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'des' },
						r.a.createElement(_.a.Label, null, 'Destreza'),
						r.a.createElement(_.a.Control, { onChange: q, value: A, name: 'des', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(A / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'agi' },
						r.a.createElement(_.a.Label, null, 'Agilidad, velocidad'),
						r.a.createElement(_.a.Control, { onChange: q, value: x, name: 'agi', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(x / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'con' },
						r.a.createElement(_.a.Label, null, 'Constituci\xf3n f\xedsica, fortaleza'),
						r.a.createElement(_.a.Control, { onChange: q, value: I, name: 'con', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(I / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'int' },
						r.a.createElement(_.a.Label, null, 'Inteligencia'),
						r.a.createElement(_.a.Control, { onChange: q, value: L, name: 'int', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(L / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'wis' },
						r.a.createElement(_.a.Label, null, 'Sabidur\xeda, astucia'),
						r.a.createElement(_.a.Control, { onChange: q, value: R, name: 'wis', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(R / 2 - 5))
					),
					r.a.createElement(
						_.a.Group,
						{ controlId: 'char' },
						r.a.createElement(_.a.Label, null, 'Carisma'),
						r.a.createElement(_.a.Control, { onChange: q, value: P, name: 'char', type: 'number', min: 7, max: 18 }),
						r.a.createElement(_.a.Text, null, 'Bonificaci\xf3n al dado: ', parseInt(P / 2 - 5))
					),
					r.a.createElement(H.a, { variant: 'primary', type: 'submit' }, 'Crear')
				)
			}
			function At() {
				var e = Object(s.a)(['\n\t\tmargin: 15px 0;\n\t'])
				return (
					(At = function () {
						return e
					}),
					e
				)
			}
			var jt = function (e) {
				var t = e.characters,
					a = e.onClick,
					n = g.c.li(At())
				return t.length
					? r.a.createElement(
							'ul',
							null,
							t.map(function (e) {
								return e.name.includes('Simple Game')
									? null
									: r.a.createElement(
											n,
											null,
											r.a.createElement(R, {
												text: ''.concat(e.name, '. Nivel: ').concat(e.level),
												onClick: a
													? function () {
															return a(e._id)
													  }
													: null,
											}),
											r.a.createElement(
												'small',
												null,
												'Fue: ',
												e.str,
												' Des: ',
												e.des,
												' Agi: ',
												e.agi,
												' Int: ',
												e.int,
												' Sab: ',
												e.wis,
												' Car: ',
												e.char
											)
									  )
							})
					  )
					: r.a.createElement('div', null, r.a.createElement('p', null, 'A\xfan no tienes personajes creados.'))
			}
			var Ot = Object(l.f)(function (e) {
				var t = e.loggedInUser,
					a = e.setUser,
					c = e.match,
					l = e.updateSavedGames,
					o = e.history,
					i = new Pe(),
					s = new je(),
					m = Object(n.useState)(null),
					d = Object(u.a)(m, 2)[1],
					p = Object(n.useState)(!1),
					h = Object(u.a)(p, 2),
					g = h[0],
					f = h[1]
				function b() {
					f(!g)
				}
				return (
					console.log(t.characters.length),
					r.a.createElement(
						r.a.Fragment,
						null,
						r.a.createElement('h3', null, 'Elige un personaje para jugar: '),
						t.characters.length > 0 &&
							r.a.createElement(jt, {
								onClick: function (e) {
									i.getChaptersFromGame(c.params.gameId)
										.then(function (t) {
											return s.createSavedGame({ gameId: c.params.gameId, currentChapter: t[0]._id, character: e })
										})
										.then(function (e) {
											return l(e), o.push('/chapter/'.concat(e._id)), s.assignSaveToUser(t._id, e._id)
										})
										.then(function (e) {
											a(e)
										})
								},
								characters: t.characters,
							}),
						r.a.createElement('button', { onClick: b }, 'Tambi\xe9n puedes crear un nuevo personaje'),
						g && r.a.createElement(Et, { hideForm: b, setUser: a, loggedInUser: t, setCharacter: d })
					)
				)
			})
			var Ct = function (e) {
					var t = e.game,
						a = e.savedGames,
						n = e.loggedInUser
					return t
						? e.noUser
							? r.a.createElement(
									'section',
									null,
									r.a.createElement(
										'article',
										null,
										r.a.createElement('h1', null, t.title),
										r.a.createElement('p', null, t.description),
										'Para jugar, registrate.'
									)
							  )
							: r.a.createElement(
									'section',
									null,
									r.a.createElement(
										'article',
										null,
										r.a.createElement('h1', null, t.title),
										r.a.createElement('p', null, t.description),
										n
											? 0 === a.length
												? r.a.createElement('div', null, r.a.createElement('p', null, 'Haz click en un personaje para empezar a jugar'))
												: r.a.createElement(
														r.a.Fragment,
														null,
														r.a.createElement(
															E.a,
															null,
															r.a.createElement(
																E.a.Toggle,
																{ variant: 'success', id: 'dropdown-basic' },
																r.a.createElement(R, { text: 'Continua la aventura' })
															),
															r.a.createElement(
																E.a.Menu,
																null,
																a.map(function (e) {
																	return e.finished
																		? null
																		: r.a.createElement(
																				c.b,
																				{ to: '/chapter/'.concat(e._id) },
																				r.a.createElement(E.a.Item, { disabled: !0 }, e.character.name)
																		  )
																})
															)
														),
														r.a.createElement(
															E.a,
															null,
															r.a.createElement(
																E.a.Toggle,
																{ variant: 'success', id: 'dropdown-basic' },
																r.a.createElement(R, { text: 'Partidas terminadas' })
															),
															r.a.createElement(
																E.a.Menu,
																null,
																a.map(function (e) {
																	return e.finished
																		? r.a.createElement(
																				c.b,
																				{ to: '/finished/'.concat(e._id) },
																				r.a.createElement(E.a.Item, { disabled: !0 }, e.character.name)
																		  )
																		: null
																})
															)
														)
												  )
											: r.a.createElement(R, { disabled: !0 }, 'Continuar la aventura')
									)
							  )
						: r.a.createElement('p', null, 'Loading game')
				},
				xt = new vt(),
				yt = new je(),
				kt = new Pe()
			var wt = Object(l.f)(function (e) {
				var t = e.game,
					a = e.savedGames,
					n = e.loggedInUser,
					l = e.setUser,
					o = e.updateSavedGames,
					i = e.history,
					u = e.match
				function s() {
					var e = 'Simple Game '.concat(a.length + 1)
					xt.createCharacter({ name: e, hp: 1e3, str: 100, des: 100, agi: 100, con: 100, int: 100, wis: 100, char: 100 }).then(function (
						e
					) {
						return xt.assignCharacterToUser(n._id, e._id).then(function (t) {
							return (
								(a = e._id),
								void kt
									.getChaptersFromGame(u.params.gameId)
									.then(function (e) {
										return yt.createSavedGame({ gameId: u.params.gameId, currentChapter: e[0]._id, character: a })
									})
									.then(function (e) {
										return o(e), i.push('/chapter/'.concat(e._id)), yt.assignSaveToUser(n._id, e._id)
									})
									.then(function (e) {
										l(e)
									})
							)
							var a
						})
					})
				}
				function m() {
					s()
				}
				return t || (n && !e.noUser)
					? e.noUser
						? r.a.createElement(
								'section',
								null,
								r.a.createElement(
									'article',
									null,
									r.a.createElement('h1', null, t.title),
									r.a.createElement('p', null, t.description),
									'Para jugar, registrate.'
								),
								'createAndAssignCharacter'
						  )
						: r.a.createElement(
								'section',
								null,
								r.a.createElement(
									'article',
									null,
									r.a.createElement('h1', null, t.title),
									r.a.createElement('p', null, t.description),
									n
										? 0 === t.chapters.length
											? r.a.createElement(R, { text: 'A\xfan no tiene ning\xfan capitulo', disabled: !0, onClick: m })
											: 0 === a.length
											? r.a.createElement(R, { text: 'Comienza la partida', onClick: m })
											: r.a.createElement(
													r.a.Fragment,
													null,
													r.a.createElement(
														E.a,
														null,
														r.a.createElement(
															E.a.Toggle,
															{ variant: 'transparent', id: 'dropdown-basic' },
															r.a.createElement(R, { text: 'Continua la aventura' })
														),
														r.a.createElement(
															E.a.Menu,
															{ style: { backgroundColor: 'rgba(40,40,40)' }, variant: 'transparent' },
															a.map(function (e) {
																return r.a.createElement(
																	c.b,
																	{ to: '/chapter/'.concat(e._id) },
																	r.a.createElement(E.a.Item, { as: 'div' }, r.a.createElement(R, { text: e.character.name }))
																)
															}),
															r.a.createElement(E.a.Divider, null),
															r.a.createElement(
																E.a.Item,
																{ as: 'div' },
																r.a.createElement(R, { text: 'Comienza una nueva aventura', onClick: m })
															)
														)
													)
											  )
										: r.a.createElement(R, { text: 'Continuar la aventura', disabled: !0 })
								)
						  )
					: r.a.createElement('p', null, 'Loading game')
			})
			var It = Object(l.f)(function (e) {
					var t = e.game,
						a = e.savedGames,
						c = e.simple,
						l = e.updateSavedGames,
						o = e.setUser,
						i = e.noUser,
						u = Object(n.useContext)(q)
					return c
						? r.a.createElement(wt, { noUser: i, updateSavedGames: l, setUser: o, loggedInUser: u, game: t, savedGames: a })
						: r.a.createElement(Ct, { noUser: i, loggedInUser: u, game: t, savedGames: a })
				}),
				St = new w(),
				Gt = new je()
			var Ut = Object(l.f)(function (e) {
					var t = e.match,
						a = e.loggedInUser,
						c = e.setUser,
						l = t.params.gameId,
						o = Object(n.useState)(null),
						i = Object(u.a)(o, 2),
						s = i[0],
						m = i[1],
						d = Object(n.useState)([]),
						p = Object(u.a)(d, 2),
						h = p[0],
						g = p[1]
					function f(e) {
						var t = Object(He.a)(h)
						t.push(e), g(t)
					}
					return (
						Object(n.useEffect)(
							function () {
								St.getOneGame(e.match.params.gameId).then(function (e) {
									return m(e)
								}),
									a &&
										Gt.getUserSaves(a._id, l).then(function (e) {
											return g(e)
										})
							},
							[e.match.params.gameId, a, l]
						),
						null === a
							? r.a.createElement(It, { game: s, noUser: !a })
							: s
							? s.simple
								? r.a.createElement(It, { simple: !0, updateSavedGames: f, setUser: c, game: s, savedGames: h })
								: r.a.createElement(
										X.a,
										{ style: { justifyContent: 'space-between' } },
										r.a.createElement(K.a, { lg: 5 }, r.a.createElement(Ot, { updateSavedGames: f, setUser: c, loggedInUser: a })),
										r.a.createElement(K.a, { lg: 5 }, r.a.createElement(It, { game: s, savedGames: h }))
								  )
							: r.a.createElement(r.a.Fragment, null, 'Loading')
					)
				}),
				Lt = (function () {
					function e() {
						Object(C.a)(this, e),
							(this.baseURL = ''.concat('https://tellmaster.herokuapp.com/api', '/characterChoices/')),
							(this.service = k.a.create({ baseURL: this.baseURL, withCredentials: !0 }))
					}
					return (
						Object(x.a)(e, [
							{
								key: 'makeChoice',
								value: function (e, t, a) {
									return this.service
										.post('/makeChoice', { saveId: e, choiceId: t, characterId: a })
										.then(function (e) {
											return e.data
										})
										.catch(function (e) {
											return console.log(e)
										})
								},
							},
						]),
						e
					)
				})(),
				Tt = a(109),
				_t = a.n(Tt),
				Ft = a(110)
			function Bt() {
				var e = Object(s.a)(['\n  position: absolute;\n  width: 360px;\n  height: 360px;\n  left: calc(50% - 360px);\n  top: 50%;\n'])
				return (
					(Bt = function () {
						return e
					}),
					e
				)
			}
			var Rt = g.c.div(Bt())
			var zt = function (e) {
				var t = e.hideAnimation,
					a = e.sprite,
					n = e.sound,
					c = Object(Ft.a)(n),
					l = Object(u.a)(c, 1)[0]
				return r.a.createElement(
					Rt,
					null,
					r.a.createElement(_t.a, {
						className: 'my-element__class--style',
						image: a,
						widthFrame: 320,
						heightFrame: 180,
						steps: 12,
						fps: 10,
						autoplay: !0,
						loop: !1,
						endAt: 12,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						onPlay: function (e) {
							console.log('init'), l()
						},
						onPause: function (e) {
							setTimeout(function () {
								t()
							}, 1e3)
						},
					})
				)
			}
			var Ht = function (e) {
					var t = e.choices,
						a = e.makeChoice,
						n = void 0 === a ? function () {} : a
					return t.map(function (e) {
						return e.successTargetChapter && e.failureTargetChapter
							? r.a.createElement('button', { onClick: n, id: e._id }, e.description)
							: r.a.createElement('button', { disabled: !0, onClick: n, id: e._id }, e.description)
					})
				},
				Nt = a(45),
				Dt = a.n(Nt),
				Pt = a(111),
				Mt = a.n(Pt),
				Qt = a(112),
				Jt = a.n(Qt),
				Zt = a(113),
				Wt = a.n(Zt),
				qt = a(114),
				Vt = a.n(qt),
				Xt = a(115),
				Kt = a.n(Xt),
				Yt = a(116),
				$t = a.n(Yt),
				ea = a(117),
				ta = a.n(ea),
				aa = a(118),
				na = a.n(aa),
				ra = a(119),
				ca = a.n(ra),
				la = a(120),
				oa = a.n(la),
				ia = a(121),
				ua = a.n(ia),
				sa = a(122),
				ma = a.n(sa),
				da = a(123),
				pa = a.n(da),
				ha = a(124),
				ga = a.n(ha),
				fa = a(125),
				ba = a.n(fa),
				va = a(126),
				Ea = a.n(va),
				Aa = a(127),
				ja = a.n(Aa),
				Oa = a(128),
				Ca = a.n(Oa),
				xa = {
					1: Dt.a,
					2: Mt.a,
					3: Jt.a,
					4: Wt.a,
					5: Dt.a,
					6: Dt.a,
					7: Vt.a,
					8: Kt.a,
					9: $t.a,
					10: ta.a,
					11: na.a,
					12: ca.a,
					13: oa.a,
					14: ua.a,
					15: ma.a,
					16: pa.a,
					17: ga.a,
					18: ba.a,
					19: Ea.a,
					20: ja.a,
				}
			var ya = Object(l.f)(function (e) {
					var t = new Lt(),
						a = e.game,
						c = a.currentChapter,
						l = a.character,
						o = Object(n.useState)(null),
						i = Object(u.a)(o, 2),
						s = i[0],
						m = i[1],
						d = Object(n.useState)(!1),
						p = Object(u.a)(d, 2),
						h = p[0],
						g = p[1]
					return r.a.createElement(
						'div',
						null,
						h &&
							r.a.createElement(zt, {
								sprite: s,
								sound: Ca.a,
								hideAnimation: function () {
									return g(!1)
								},
							}),
						r.a.createElement('div', { dangerouslySetInnerHTML: { __html: c.description } }),
						r.a.createElement(Ht, {
							makeChoice: function (a) {
								t.makeChoice(e.game._id, a.currentTarget.id, l._id).then(function (t) {
									m(xa[t.roll]), g(!0), e.updateChapterOnSave()
								})
							},
							choices: c.choices,
						})
					)
				}),
				ka = new je()
			var wa = Object(l.f)(function (e) {
					var t = e.match,
						a = Object(n.useState)(null),
						c = Object(u.a)(a, 2),
						l = c[0],
						o = c[1],
						i = Object(n.useState)(!1),
						s = Object(u.a)(i, 2),
						m = s[0],
						p = s[1]
					return (
						Object(n.useEffect)(
							function () {
								ka.getFullSave(t.params.savedGameId).then(function (e) {
									o(e), p(!0)
								})
							},
							[t.params.savedGameId]
						),
						m
							? l.currentChapter
								? r.a.createElement(ya, {
										updateChapterOnSave: function () {
											ka.getFullSave(t.params.savedGameId).then(function (e) {
												e.currentChapter.last &&
													((e.finished = !0), ka.updateSavedGame({ savedGameId: t.params.savedGameId, finished: !0 })),
													o(e),
													p(!0)
											})
										},
										game: l,
								  })
								: r.a.createElement('div', null, r.a.createElement('p', null, 'Esta aventura a\xfan no tiene capitulos.'))
							: r.a.createElement(d.a, null)
					)
				}),
				Ia = new w()
			var Sa = function (e) {
					var t = Object(n.useContext)(q),
						a = Object(n.useState)(null),
						c = Object(u.a)(a, 2),
						l = c[0],
						o = c[1],
						i = Object(n.useState)(!1),
						s = Object(u.a)(i, 2),
						m = s[0],
						d = s[1]
					return (
						Object(n.useEffect)(
							function () {
								Ia.getOwnedGames(t._id).then(function (e) {
									o(e || null), d(!0)
								})
							},
							[t._id]
						),
						r.a.createElement(
							X.a,
							null,
							m
								? (null === l || void 0 === l
										? void 0
										: l.map(function (e) {
												return r.a.createElement(K.a, { lg: 3 }, r.a.createElement(xe, { game: e }))
										  })) || r.a.createElement('p', null, 'A\xfan no tienes historias en juego.')
								: r.a.createElement(Oe, null)
						)
					)
				},
				Ga = new je(),
				Ua = new Pe()
			var La = Object(l.f)(function (e) {
				return (
					Object(n.useEffect)(
						function () {
							Ga.getFullSave(e.match.params.saveId).then(function (e) {
								var t = e.choicesTree.map(function (e) {
									var t = e.didSuccess ? e.choice.successTargetChapter : e.choice.failureTargetChapter
									return Ua.getChapter(t).then(function (e) {
										return e
									})
								})
								Promise.all(t)
									.then(function (e) {})
									.catch(function (e) {
										return console.log(e)
									})
							})
						},
						[e.match.params.saveId]
					),
					r.a.createElement('div', null)
				)
			})
			var Ta = function (e) {
				var t = e.character
				return t
					? r.a.createElement(
							'div',
							null,
							r.a.createElement('h5', null, t.name),
							r.a.createElement('p', null, 'Level: ', t.level),
							r.a.createElement('p', null, 'Experience: ', t.exp),
							r.a.createElement(
								'small',
								null,
								'Fue: ',
								t.str,
								' Des: ',
								t.des,
								' Agi: ',
								t.agi,
								' Int: ',
								t.int,
								' Sab: ',
								t.wis,
								' Car: ',
								t.char
							)
					  )
					: null
			}
			function _a() {
				var e = Object(s.a)([''])
				return (
					(_a = function () {
						return e
					}),
					e
				)
			}
			var Fa = g.c.section(_a())
			var Ba = function (e) {
				var t = e.characters,
					a = Object(n.useState)(!1),
					c = Object(u.a)(a, 2),
					l = c[0],
					o = c[1],
					i = Object(n.useState)(null),
					s = Object(u.a)(i, 2),
					m = s[0],
					d = s[1]
				return r.a.createElement(
					Fa,
					null,
					r.a.createElement(jt, {
						onClick: function (e) {
							var a = t.find(function (t) {
								return t._id === e
							})
							d(a), o(!0)
						},
						characters: t,
					}),
					r.a.createElement(
						J,
						{
							noHeader: !0,
							onHide: function () {
								return o(!1)
							},
							show: l,
						},
						r.a.createElement(Ta, { character: m })
					)
				)
			}
			var Ra = function (e) {
				var t = e.loggedInUser,
					a = e.setloginModal,
					n = e.setUser
				return r.a.createElement(
					l.c,
					null,
					r.a.createElement(l.a, {
						exact: !0,
						path: '/',
						render: function () {
							return r.a.createElement(ae, { showLogin: a })
						},
					}),
					r.a.createElement(l.a, {
						exact: !0,
						path: '/lastGames',
						render: function () {
							return r.a.createElement(Ae, { loggedInUser: t })
						},
					}),
					r.a.createElement(l.a, {
						exact: !0,
						path: '/read/:gameId',
						render: function () {
							return r.a.createElement(Ut, { setUser: n, loggedInUser: t })
						},
					}),
					t &&
						r.a.createElement(
							r.a.Fragment,
							null,
							r.a.createElement(l.a, {
								exact: !0,
								path: '/playedGames',
								render: function () {
									return r.a.createElement(ke, { loggedInUser: t })
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/createdGames',
								render: function () {
									return r.a.createElement(Sa, { loggedInUser: t })
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/newGame',
								render: function () {
									return r.a.createElement(ze, { loggedInUser: t })
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/myCharacters',
								render: function () {
									return r.a.createElement(Ba, { characters: t.characters })
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/modify/:gameId',
								render: function (e) {
									return r.a.createElement(bt, Object.assign({}, e, { loggedInUser: t }))
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/chapter/:savedGameId',
								render: function () {
									return r.a.createElement(wa, null)
								},
							}),
							r.a.createElement(l.a, {
								exact: !0,
								path: '/finished/:saveId',
								render: function () {
									return r.a.createElement(La, { loggedInUser: t })
								},
							})
						)
				)
			}
			function za() {
				var e = Object(s.a)([
					'\n\t\t* {\n\t\t\tfont-family: "Special Elite"\n\t\t}\n    body {\n      color: ',
					';\n      background-color: ',
					';\n    }\n\n\t\tmain {\n\t\t\tpadding: 50px 90px;\n\t\t}\n\t\t\n    a {\n      color: #eee;\n    }\n    a:hover {\n      color: #eee;\n      text-decoration: none;\n    }\n\n\t\tinput {\n\t\t\tbackground-color: rgb(235, 235, 235);\n\t\t}\n',
				])
				return (
					(za = function () {
						return e
					}),
					e
				)
			}
			var Ha = new T(),
				Na = Object(g.b)(za(), V.colors.general, V.background.general)
			var Da = function () {
				var e = Object(n.useState)(!1),
					t = Object(u.a)(e, 2),
					a = t[0],
					c = t[1],
					l = Object(n.useState)(!1),
					o = Object(u.a)(l, 2),
					i = o[0],
					s = o[1],
					m = Object(n.useState)(!1),
					d = Object(u.a)(m, 2),
					p = d[0],
					h = d[1]
				function f(e) {
					h(e)
				}
				return (
					Object(n.useEffect)(
						function () {
							return (
								!1 === p &&
									Ha.loggedin().then(function (e) {
										h(e || null)
									}),
								function () {}
							)
						},
						[p]
					),
					r.a.createElement(
						g.a,
						{ theme: V },
						r.a.createElement(
							W,
							{ value: p },
							r.a.createElement(Na, null),
							r.a.createElement(L, {
								logout: function () {
									Ha.logout().then(function () {
										return h(null)
									})
								},
								showSignup: function () {
									return s(!0)
								},
								showLogin: function () {
									return c(!0)
								},
								loggedInUser: p,
							}),
							r.a.createElement(
								'main',
								null,
								r.a.createElement(Ra, { loggedInUser: p, setloginModal: c, setUser: f }),
								r.a.createElement(
									r.a.Fragment,
									null,
									r.a.createElement(
										J,
										{
											title: 'Login',
											show: a,
											onHide: function () {
												return c(!1)
											},
										},
										r.a.createElement(z, { setUser: f })
									),
									r.a.createElement(
										J,
										{
											title: 'Signup',
											show: i,
											onHide: function () {
												return s(!1)
											},
										},
										r.a.createElement(N, { setUser: f })
									)
								)
							)
						)
					)
				)
			}
			Boolean(
				'localhost' === window.location.hostname ||
					'[::1]' === window.location.hostname ||
					window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
			)
			i.a.render(
				r.a.createElement(
					r.a.StrictMode,
					null,
					r.a.createElement(
						c.a,
						null,
						r.a.createElement(l.a, {
							path: '/',
							render: function (e) {
								return r.a.createElement(Da, e)
							},
						})
					)
				),
				document.getElementById('root')
			),
				'serviceWorker' in navigator &&
					navigator.serviceWorker.ready
						.then(function (e) {
							e.unregister()
						})
						.catch(function (e) {
							console.error(e.message)
						})
		},
		45: function (e, t, a) {
			e.exports = a.p + 'static/media/r01.66469ed4.png'
		},
		67: function (e, t, a) {
			e.exports = a.p + 'static/media/playingTable.e9c5973e.png'
		},
		68: function (e, t, a) {
			e.exports = a.p + 'static/media/d6book.f2700073.svg'
		},
		69: function (e, t, a) {
			e.exports = a.p + 'static/media/d20.32c11da5.svg'
		},
		70: function (e, t) {
			e.exports =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAPsAAAD7AFKhtV5AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAALFQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcidCwAAADp0Uk5TAAEDBAUGCw0PGx4gISstLkBER11fYGFnaWtsk5eYmp2eo6Spq6ytrq+wsbK2zM/d4OPw8vP09vf4/uaZfbgAAAHzSURBVHja7drZTsJQFIXhBXWeBwQF5wlFAUUm1/s/mDeYgPS057RnbzXZ67Jp8/1J26QXBWw2m81ms9lsNpvN9jeW7J8c71a1tOru8cl+Mndg53VKkuP2pga/2R6T5PR1Z3ag0hxxtkFd3q8PvrVRswIAuODcboTvQ/VmXjsHgCMu7Fa0oHq7qB0CG+/UK/jp820dZ6RawZJPnuKaagUpPq/Qo1ZBms8ehlQqSPU5RJc6Bek+u7ikSoHD5yUa1Chw+Wxgra9Q4PT7a8DBp3iB0/88AIAWhQucPlsAgORetsDt38++CWQL8n3ZAh9fssDPlytw+w/J4pkyBf6+TEGIL1EQ5scvCPVjF4T7cQuK+DELivnxCtz+Y5J9ZZyC4n6cgjJ+jIJyfvmCsn7ZgvJ+uYIMf8X/KS5eEMcvXhDLL1rg9tuBfrGCmH6Rgrh+eEFsP7Qgvh9WIOGHFMj4/gVSvm+BnO9X4PafSvs+BbJ+foG0n1cg72cXaPiZBSp+VoGOH14Q2w8teI7uhxVI+CEFMr5/gZTvWyDn+xVI+j4Fsn5+gbSfVyDvZxd0FPysAh3fXaDluwr0/PSCzirwmwW6/nKBtg8kdwvvv7oPoPHxzQ9nf6Nob+tlQpKTl2381pK9Wm0vgc1ms9lsNpvNZrPZ/vW+AEbmqyT8wqAZAAAAAElFTkSuQmCC'
		},
		78: function (e, t, a) {
			e.exports = a.p + 'static/media/invertedlogo.9e69b76b.png'
		},
	},
	[[130, 1, 2]],
])
//# sourceMappingURL=main.c721f5ae.chunk.js.map
