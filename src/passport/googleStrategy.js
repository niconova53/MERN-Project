const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/GoogleUser')

var authConfig = require('../config/auth');

const strategy = new GoogleStrategy(
    authConfig.google,
    function (token, tokenSecret, profile, done) {
        console.log('===== GOOGLE PROFILE =======')
        console.log(profile)
        console.log('======== END ===========')
        const { id, name, photos } = profile
        User.findOne({ 'google.googleId': id }, (err, userMatch) => {
            if (err) {
                console.log('Error!! trying to find user with googleId')
                console.log(err)
                return done(null, false)
            }
            if (userMatch) {
                return done(null, userMatch)
            } else {
                console.log('====== PRE SAVE =======')
                console.log(id)
                console.log(profile)
                console.log('====== post save ....')
                const newGoogleUser = new User({
                    'google.googleId': id,
                    firstName: name.givenName,
                    lastName: name.familyName,
                    photos: photos
                })
                // save user
                newGoogleUser.save((err, savedUser) => {
                    if (err) {
                        console.log('Error!! saving the new google user')
                        console.log(err)
                        return done(null, false)
                    } else {
                        return done(null, savedUser)
                    }
                })
            }
        })
    }
)

module.exports = strategy