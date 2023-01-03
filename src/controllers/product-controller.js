'use strict'


const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repositories/product-repository')


// Get Listando os produtos.

exports.get = async(req, res, next) => {
    try{
    var data = repository.get()
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }
}

// Get Listando os produtos by Slug

exports.getbySlug = async(req, res, next) => {
    try{
    var data = await repository.getbySlug(req.params.slug)
            res.status(200).send(data);
        } catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
        });
    }
}


// Get Listando os produtos by ID

exports.getbyId = async(req, res, next) => {
    try {
        var data = await repository.getbyId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

// Get Listando os produtos by tag

exports.getbyTags = async(req, res, next) => {
    try{
        const data = await repository.getbyTag(req.params.tag);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
                message: 'Falha ao processar sua requisição'
        })
    }
}
    
// POST

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3,  'O titulo deve conter pelo menos 3 caracteres');    
    contract.hasMinLen(req.body.slug, 3,  'O titulo deve conter pelo menos 3 caracteres');    
    contract.hasMinLen(req.body.description, 3,  'O titulo deve conter pelo menos 3 caracteres');

    //Se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        })
    }catch(e){
        res.status(500).send({
                message: 'Falha ao processar sua requisição'
        })
    }
};

// PUT
exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
        message: 'Produto atualizado com sucesso!'
    })    
    }catch(e){
        res.status(500).send({
                message: 'Falha ao atualizar sua requisição'
        })
    }
}

// DELETE
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id)
        res.status(200).send({
        message: 'Produto removido com sucesso!'
        });
    }catch (e) {
        res.status(500).send({
                message: 'Falha ao remover '
        })
    }        
}
