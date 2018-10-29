let express = require('express');
let router = express.Router();
let pool = require('../config/connections');


// get data by id
router.get('/byid/:id', (req, res) => {
    pool.query('SELECT * FROM todos WHERE id = ?', req.params.id, (err, results, field) => {
        res.send(results);
    });
});

// get data based on userId
router.get('/byuser/:userid', (req, res) => {
    pool.query('SELECT * FROM todos WHERE userid = ?', req.params.userid, (err, results, field) => {
        res.send(results);
    });
});

// get all users
router.get('/all', (req, res) => {
    pool.query('SELECT * FROM todos', (err, results, field) => {
        res.send(results);
    });
});

// post data to database
router.post('/add', (req, res) => {
    pool.query('INSERT INTO todos SET ?', {
        name: req.body.name,
        completed: false,
        userId: req.body.userid
    }, (err) => {
        if (err) return res.send(err);
        res.send('todo posted');
    });
});

// ES5 Export 
module.exports = router;