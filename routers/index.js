'use strict'

const express = require('express');
//Controladores
const ProductCtrl = require('../controllers/product');
const UserCtrl = require('../controllers/user');
//middleware
const auth = require('../middlewares/auth');
const api = express.Router();

//PRODUCTOS
api.get('/product', ProductCtrl.getProducts);
//Busca por el id de mongo + ._idproduct
api.get('/product/:productId', ProductCtrl.getProduct);

api.post('/product',auth, ProductCtrl.saveProduct);

//PARA MODIFICAR UN PRODUCTO +._idproduvt
api.put('/product/:productId',auth, ProductCtrl.UpdateProduct);

//PARA ELIMINAR UN PRODUCTO
api.delete('/product/:productId',auth, ProductCtrl.deleteProduct);


//USUARIOS
api.post('/singUp', UserCtrl.signUp);
api.post('/singIn', UserCtrl.signIn);
api.get('/private',auth, (req, res) => {
    res.status(200).send({menssage: `Tienes acceso`})
}); 
 
module.exports = api;