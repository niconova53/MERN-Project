const passport = require('passport')
const GoogleStratgey = require('./googleStrategy')

const User = require('../models/GoogleUser')

passport.serializeUser((user, done) => {
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		(err, user) => {
			done(null, user)
		}
	)
})
passport.use(GoogleStratgey)
module.exports = passport