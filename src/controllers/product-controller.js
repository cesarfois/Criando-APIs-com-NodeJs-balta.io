'use strict'


const mongoose = require('mongoose');
const Product = mongoose.model('Product');


// Get Listando os produtos.

exports.get = (req, res, next) => {
    Product
        .find({
            active: true
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        })
}




// POST

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            })
        }).catch(e => {
            res.status(400).send({
                message: ' Falha ao cadastrar o produto',
                data: e
            })
        })
};

// PUT
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

// DELETE
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
