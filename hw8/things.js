const express = require('express');
const pool = require('./queries.js');
const router = express.Router();

router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category', (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(results.rows);
        }
    });
});

router.get('/actor', (req, res) => {
    pool.query('SELECT * FROM actor', (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(results.rows);
        }
    });
});

router.get('/film/:category', (req, res) => {
    const category = req.params.category;
    pool.query('SELECT * FROM film_list WHERE category = $1', [category], (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(results.rows);
        }
    });
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM film WHERE film_id = $1', [id], (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(results.rows);
        }
    });
});

router.get('/', (req, res) => {
    pool.query('SELECT * FROM film_list ORDER BY fid ASC', (err, results) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(results.rows);
        }
    });
});

router.post('/', (req, res) => {
    const { firstname, lastname } = req.body;

    if (!firstname || !lastname) {
        return res.status(400).send('Firstname and lastname are required');
    }

    pool.query(
        'INSERT INTO actor (first_name, last_name) VALUES ($1, $2)', [firstname, lastname],
        (error, results) => {
            if (error) {
                console.error('Error executing query', error.stack);
                return res.status(500).send('Internal Server Error');
            }
            res.status(201).send('Actor baru telah ditambahkan');
        }
    );
});

// router.put('/:name/:class', (req, res) => {
//     res.send('Hello worlds ' + req.params.name + ' ' + req.params.class);
// });

module.exports = router;
