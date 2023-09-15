const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Product = require('../models/product');
const config = require('../config/database')
require('dotenv').config;

router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    console.log(1);
    res.json(req.user.admin);
})
router.post('/product/edit', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let edited = {
        name        : req.body.name,
        description : req.body.description,
        price       : req.body.price,
        category    : req.body.category,
        time        : req.body.time,
        image       : req.body.image
    };
    Product.findByIdAndUpdate(req.body.id, edited)
    
            .then((product)=> {res.json({success: true, msg : 'Product added.', product: product})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add product.', err: err})});
    
})

router.delete('/product/delete', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    console.log(req.body.id)
    Product.deleteOne({ _id : req.body.id })
        .then((product)=> {
            if (product.deletedCount > 0){
                res.json({success: true, msg : 'Product deleted.', product: product})
            }else{
                res.json({success: false, msg : "Couldn't find product.", product: product})
            }
        })
        .catch((err) => {res.json({success: false, msg : 'Failed to delete product.', err: err})});
})

router.get('/product/list',  (req, res, next) => {
    
    Product.find({}).sort({"joindate":-1})
            .then((products)=> {res.json({success: true, msg : 'Products listed.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add product.', err: err})});
    
})

module.exports = router;