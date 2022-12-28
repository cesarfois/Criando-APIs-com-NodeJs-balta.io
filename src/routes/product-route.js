'use strict'

const express = require('express');
const router = express.Router();


// POST


router.post('/', (req, res, next)=> {
    res.status(201).send(req.body);
});

// PUT

router.put('/:id', (req, res, next)=> {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

// DELETE


router.delete('/', (req, res, next)=> {
    res.status(200).send(req.body);
});


module.exports = router;