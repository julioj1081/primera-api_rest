'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const api = require('./routers');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//http://localhost:3000/hola/mundo
/* app.get('/hola/:name', (req, res) =>{
    res.send({menssage: `hola ${req.params.name}`});
});  */

//CONFIGURACION DE MOTOR DE PLANTILLAS 
// usando express-handlebars
app.engine('.hbs', hbs({
    defaultLayout: 'default', 
    extname : '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api);

app.get('/login', (req, res) =>{
    res.render('login');
})
app.get('/product', (req, res) =>{
    res.render('product');
})

module.exports = app; 