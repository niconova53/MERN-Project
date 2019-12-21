const express = require('express');
const passport = require('./passport');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api/cities', require('./routes/itinerary/cities'));
app.use('/api/itinerarys', require('./routes/itinerary/itinerarys'));
app.use('/api/account/users', require('./routes/account/users'));
app.use('/api/account/authorize', require('./routes/account/authorize'));


// test authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}

// ############# GOOGLE AUTHENTICATION ################

app.use('/auth', require('./routes/account/googleUser'))


module.exports = app;