module.exports = {
	checkLoggedIn: (req, res, next) => (req.session.user ? next() : res.status(401).json({ errorMsg: 'Log in to continue' }))
}
