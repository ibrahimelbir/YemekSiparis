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
router.post('/category/add', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newCategory = new Category({
        name        : req.body.name,
        valid       : req.body.valid,
        addedby     : req.user.id
    });
    newCategory.save()
    
            .then((categories)=> {res.json({success: true, msg : 'Category added.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit category.', err: err})});
    
})
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


// User
router.get('/user/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    
    User.find({})
            .then((categories)=> {res.json({success: true, msg : 'Categories listed.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add category.', err: err})});
    
})

router.post('/user', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    console.log(req.body.id)
    User.findById(req.body.id)
            .then((users)=> {res.json({success: true, msg : 'User found.', users: users})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find user.', err: err})});
    
})

// Order


router.post('/order/add', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newOrder = new Order({
        product     : req.body.product,
        customer    : req.user.id,
        note        :  req.body.note ? req.body.note : ''

    })
    newOrder.save()
            .then((orders)=> {res.json({success: true, msg : 'Order added.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add order.', err: err})});
    
})

router.delete('/order/delete', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Order.deleteById(req.body.id).save()
            .then((orders)=> {res.json({success: true, msg : 'Order deleted.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to delete order.', err: err})});
    
})

router.post('/order', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    
    
    Order.findById(req.body.id)
            .then((orders)=> {res.json({success: true, msg : 'Order found.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find order.', err: err})});
    
})

router.post('/order/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    
    
    Order.find({})
            .then((orders)=> {res.json({success: true, msg : 'Orders listed.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to list orders.', err: err})});
    
})

router.post('/order/edit', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let edited = {
        status       : req.body.status,
    };
    Order.findByIdAndUpdate(req.body.id, edited)
    
            .then((orders)=> {res.json({success: true, msg : 'Order edited.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit order.', err: err})});
    
})

router.post('/product/findByCategory', (req, res, next) => {
    
    Product.find({category: req.body.category})
    
            .then((products)=> {res.json({success: true, msg : 'Products that belongs to '+ req.body.category +' list.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find products.', err: err})});
    
})


module.exports = router;