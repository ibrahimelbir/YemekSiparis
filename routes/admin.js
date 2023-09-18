const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database')
const jwt = require('jsonwebtoken');
require('dotenv').config;



const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category')
const Order = require('../models/order')

// Dashboard
router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    console.log(1);
    res.json(req.user.admin);
})


// Product
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
    
            .then((product)=> {res.json({success: true, msg : 'Product edited.', product: product})})
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

// Category

router.post('/category/edit', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let edited = {
        name        : req.body.name,
        valid       : req.body.valid,
    };
    Category.findByIdAndUpdate(req.body.id, edited)
    
            .then((categories)=> {res.json({success: true, msg : 'Category edited.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit category.', err: err})});
    
})

router.delete('/category/delete', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Category.deleteOne({ _id : req.body.id })
        .then((categories)=> {
            if (product.deletedCount > 0){
                Product.deleteProductByCategory(req.body.id).then( res => {
                    res.json({success: true, msg : 'Products that related to '+ categories +' deleted.', products: res})
                }, err => {
                    console.error(err);
                })
                res.json({success: true, msg : 'Category deleted.', categories: categories})
            }else{
                res.json({success: false, msg : "Couldn't find category.", categories: categories})
            }
        })
        .catch((err) => {res.json({success: false, msg : 'Failed to delete category.', err: err})});
})

router.get('/category/list',  (req, res, next) => {
    
    Category.find({}).sort({"joindate":-1})
            .then((categories)=> {res.json({success: true, msg : 'Categories listed.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add category.', err: err})});
    
})

module.exports = router;