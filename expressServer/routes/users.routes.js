let express = require('express');
let router = express.Router();
let pool = require('../config/connections');
// let models = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// send username and password to db
router.post('/login', (req, res) => {
  pool.query('SELECT * FROM USERS WHERE username = ?', req.body.username, (err, results) => {
    // error
    if (err) res.send(err);
    // no results found
    if (results.length == 0) {
      bcrypt.compareSync('someString', 'someOtherString');
      res.send('Incorrect username or password');
    }
    // results found, compare username and password
    if (results.length !== 0) {
      var matching = bcrypt.compareSync(req.body.password, results[0].password);
      if (matching) {
        return res.send('success');
      }
      res.send('incorrect');
    }
  });
});

// send user to sign up page
router.post('/signup', (req, res) => {
  pool.query("SELECT * FROM USERS WHERE username = ?", req.body.username, (err, results) => {
    // error
    if (err) return res.send(err);
    //  if username is already in use
    if (results.length > 0) return res.send('Username is already in use.');
    // no existing username - create new user and password
    if (results.length == 0) {
      var hash = bcrypt.hashSync(req.body.password, saltRounds);
      pool.query('INSERT INTO users SET ?', {
        username: req.body.username,
        password: hash
      }, (err) => {
        if (err) return res.send(err);
        res.send('success');
      });
    }
  });
});


// ES5 Export 
module.exports = router;
