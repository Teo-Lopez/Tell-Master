require('dotenv').config()
const express = require('express')
const app = express()
require('./configs/mongoose.config')
require('./configs/debug.config')
require('./configs/middleware.config')(app)
require('./configs/view_engine.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)

require('./routes')(app)

app.use((req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})
module.exports = app
