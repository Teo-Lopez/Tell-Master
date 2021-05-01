module.exports = app => {
	// Base URLS
	app.use('/', require('./base.routes.js'))
	app.use('/api/auth', require('./auth.routes'))
	app.use('/api/games', require('./games.routes'))
	app.use('/api/chapters', require('./chapter.routes'))
	app.use('/api/choices', require('./choices.routes'))
	app.use('/api/savedGames', require('./savedGames.routes'))
	app.use('/api/characters', require('./character.routes'))
	app.use('/api/characterChoices', require('./characterChoices.routes'))
}
