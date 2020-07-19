'use strict'
const Product = require('../models/products');
function getProduct(req, res){
    let productId = req.params.productId;
    Product.findById(productId, (error, producto) => {
        if(error) return res.status(500).send({menssage: `Error al realizar la peticion ${error}`});
        if(!producto) return res.status(400).send({menssage: `El producto no existe `});
        return res.status(200).send({product: producto})
    })
}

function getProducts(req, res){
    Product.find({}, (error, products) =>{
        if(error) return res.status(500).send({menssage: `Error al realizar la peticion ${error}`});
        if(!products) return res.status(400).send({menssage: `El producto no existe`});
        res.send(200, {products});
    })
}

function saveProduct(req, res){
    console.log("POST /API/PRODUCT");
    console.log(req.body);
    let product = new Product();
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    
    product.save((err, productStored) =>{
        if(err) res.status(500).send({menssage: `error al salvar: ${err}`})
        res.status(200).send({product: productStored})
    });
}

function UpdateProduct(req, res){
    let productId = req.params.productId;
    //PARAMETROS DEL PRODUCTO ID
    let update = req.body;
    Product.findByIdAndUpdate(productId, update , (error, productUpdate) =>{
        if(error) return res.status(500).send({menssage: `Error al actualizar el producto ${error}`});
        res.status(200).send({menssage: `modifacion con exito`},{product: productUpdate});
    })
}

function deleteProduct(req, res){
    let productId = req.params.productId;
    Product.findById(productId, (error,product) =>{
        if(error) return res.status(500).send({menssage: `Error al encontrar el producto ${error}`});
        product.remove(err =>{
            if(err) return res.status(500).send({menssage: `Error al borrar el producto ${err}`});
            res.status(200).send({menssage: `producto eliminado correctamente`});
        })
    })
}


module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    UpdateProduct,
    deleteProduct
}