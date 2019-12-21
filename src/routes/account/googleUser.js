const express = require('express')
const router = express.Router()
const passport = require('../../passport')
const authGoogle = require('../../middleware/googleService');


router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        authGoogle.signToken(req, res);
    });

router.get('/verify', authGoogle.checkTokenMW, (req, res) => {
    authGoogle.verifyToken(req, res);
    if (null === req.authData) {
        res.sendStatus(403);
    } else {
        res.json(req.authData);
    }
});

module.exports = router


/*

app.get('/', (req, res) => {
    res.send('<h1>JJJJJJJJJJJJJJ</h1>');
});

app.get(
    '/auth/google',
    passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email']
    })
);

////////////////////////////////////////////////////////////////////

app.get(
    '/auth/google/callback/',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        authGoogle.signToken(req, res);
    }
);

/////////////////////////////////////////////////////////////////////

app.get('/verify', authGoogle.checkTokenMW, (req, res) => {
    authGoogle.verifyToken(req, res);
    if (null === req.authData) {
        res.sendStatus(403);
    } else {
        res.json(req.authData);
    }
}); */

/////////////////////////////////////////////////////////////////////

/* router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/account',
        failureRedirect: 'http://localhost:3000'
    })
); */

/* passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('http://localhost:3000/account');
}); */


/* passport.authenticate('google', { failureRedirect: '/', session: false }),
(req, res) => {
    console.log('USER authenticated: ', req.user);
    res.json(req.user);
}) */