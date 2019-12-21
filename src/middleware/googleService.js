const jwt = require('jsonwebtoken');

// check if Token exists on request Header and attach token to request as attribute
exports.checkTokenMW = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        res.sendStatus(403);
    }
};

// Verify Token validity and attach token data as request attribute
exports.verifyToken = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            return req.authData = authData;
        }
    })
};

// Token
exports.signToken = (req, res) => {
    jwt.sign({ user: req.user }, 'secretkey', { expiresIn: '1 min' }, (err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            //res.json({token});
            res.redirect('http://localhost:3000/accountGoogle?token=' + token);
            //res.json({success: true, token: 'bearer ' + token});
        }
    });
}