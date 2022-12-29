'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

// Conecta com o banco de Dados
mongoose.connect('mongodb+srv://fois2010:Siexpre$$@cluster0.9e3ejn1.mongodb.net/?retryWrites=true&w=majority');



// Carrega os Models
const Product = require('./models/product');


// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
