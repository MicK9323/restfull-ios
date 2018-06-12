var Producto = require('../models/producto.model');
var Categoria = require('../models/categoria.model');
var Tipo = require('../models/tipo.model');
var Response = require('../models/response.model');
var Message = require('../models/helper.model');
var mongoose = require('mongoose');

exports.FindCategories = (req, res) => {
    Categoria.find({})
        .exec()
        .then(result => {
            let response = new Response(true, null, result);
            res.status(200).json(response);
        }).catch(error => {
            let response = new Response(false, Message.ERROR, error);
            res.status(500).json()
        });
};

exports.ProductsList = (req,res) => {
    Producto.find({})
        .populate({path:'tipo',select:'tipo'})
        .populate({path:'categoria',select:'categoria'})
        .exec()
        .then(result =>{
            let response = new Response(true,null,result);
            res.status(200).json(response);
        }).catch(error => {
            let response = new Response(false,Message.ERROR,error);
            res.status(500).json(response);
        })
};

exports.FindTypes = (req, res) => {
    Tipo.find({})
        .populate('categoria')
        .exec()
        .then(result => {
            let response = new Response(true, null, result);
            res.status(200).json(response);
        }).catch(error => {
            let response = new Response(false, Message.ERROR, error);
            res.status(500).json(response);
        });
};

exports.FindByCategory = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.body.categoria);
    Producto.find({
            categoria: id
        })
        .select("_id nombre imagen precio tipo")
        .populate('tipo')
        .exec()
        .then(result => {
            if (result.length > 0) {
                let response = new Response(true, null, result);
                res.status(200).json(response);
            } else {
                let response = new Response(true, Message.EMPTY, result);
                res.status(200).json(response);
            }
        }).catch(error => {
            let response = new Response(false, Message.ERROR, error);
            res.status(500).json(response);
        });
};

exports.FindByType = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.body.tipo);
    Producto.find({
            tipo: id
        })
        .select("_id nombre imagen precio tipo")
        .populate('tipo')
        .exec()
        .then(result => {
            if (result.length > 0) {
                let response = new Response(true, null, result);
                res.status(200).json(response);
            } else {
                let response = new Response(true, Message.EMPTY, result);
                res.status(200).json(response);
            }
        }).catch(error => {
            let response = new Response(false, Message.ERROR, error);
            res.status(500).json(response);
        });
};

exports.FindByID = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.body.id);
    Producto.findById({
            "_id": id
        })
        .select("_id nombre descripcion imagen precio tipo")
        .populate('tipo')
        .exec()
        .then(result => {
            let response = new Response(true, null, result);
                res.status(200).json(response);
        }).catch(error => {
            let response = new Response(false, Message.ERROR, error);
            res.status(500).json(response);
        });
};