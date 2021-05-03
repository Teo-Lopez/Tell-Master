const mongoose = require('mongoose')

module.exports = {
	checkLoggedIn: (req, res, next) => (req.session.user ? next() : res.status(401).json({ errorMsg: 'Log in to continue' })),
	checkMongoId: (req, res, next) =>
		mongoose.Types.ObjectId.isValid(req.params.wave_id) ? next() : res.status(400).json({ status: 400, message: 'Wrong ID format' })
}
