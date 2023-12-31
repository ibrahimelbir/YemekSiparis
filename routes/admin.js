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
router.get('/in', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json(req.user.admin);
})


// Product
router.post('/product/add', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    let newProduct = new Product({
        name        : req.body.name,
        description : req.body.description,
        price       : req.body.price,
        category    : req.body.category,
        time        : req.body.time,
        image       : req.body.image,
        addedby     : req.user.id
    });
    newProduct.save()
    
            .then((products)=> {res.json({success: true, msg : 'Product added.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add product.', err: err})});
    
})

router.post('/product/edit', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    let edited = {
        name        : req.body.name,
        description : req.body.description,
        price       : req.body.price,
        category    : req.body.category,
        time        : req.body.time,
        image       : req.body.image
    };
    Product.findByIdAndUpdate(req.body.id, edited)
    
            .then((products)=> {res.json({success: true, msg : 'Product edited.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit product.', err: err})});
    
})

router.delete('/product/delete', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    Product.deleteOne({ _id : req.body.id })
        .then((products)=> {
            if (products.deletedCount > 0){
                res.json({success: true, msg : 'Product deleted.', products: products})
            }else{
                res.json({success: false, msg : "Couldn't find product.", products: products})
            }
        })
        .catch((err) => {res.json({success: false, msg : 'Failed to delete product.', err: err})});
})

router.get('/product/list',  (req, res, next) => {
    
    Product.find({}).sort({"joindate":-1})
            .then((products)=> {res.json({success: true, msg : 'Products listed.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add product.', err: err})});
    
})

router.post('/product/getByID', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Product.findById(req.body.id)
            .then((products)=> {res.json({success: true, msg : 'Product found.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find product.', err: err})});
    
})


router.post('/product/findByCategory', (req, res, next) => {
    
    Product.find({category: req.body.category})
    
            .then((products)=> {res.json({success: true, msg : 'Products that belongs to '+ req.body.category +' list.', products: products})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find products.', err: err})});
    
})


// Category

router.post('/category/add', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    let newCategory = new Category({
        name        : req.body.name,
        valid       : true,
        addedby     : req.user.id
    });
    newCategory.save()
    
            .then((categories)=> {res.json({success: true, msg : 'Category added.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit category.', err: err})});
    
})
router.post('/category/edit', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    let edited = {
        name        : req.body.name,
        valid       : req.body.valid,
    };
    Category.findByIdAndUpdate(req.body.id, edited)
    
            .then((categories)=> {res.json({success: true, msg : 'Category edited.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit category.', err: err})});
    
})

router.delete('/category/delete', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
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

router.post('/category/getByID', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    Category.findById(req.body.id)
            .then((categories)=> {res.json({success: true, msg : 'Category found.', categories: categories})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find category.', err: err})});
    
})


// User
router.get('/user/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.find({})
            .then((users)=> {res.json({success: true, msg : 'Users listed.', users: users})})
            .catch((err) => {res.json({success: false, msg : 'Failed to add category.', err: err})});
    
})

router.post('/user/getByID', passport.authenticate('jwt', {session: false}), (req, res, next) => {
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
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});
    Order.deleteOne({_id :req.body.id})
        .then((orders)=> {
            if (orders.deletedCount > 0){
                res.json({success: true, msg : 'Order deleted.', orders: orders})
            }else{
                res.json({success: false, msg : "Couldn't find order.", orders: orders})
            }
        })
        .catch((err) => {res.json({success: false, msg : 'Failed to delete order.', err: err})});
    
})

router.post('/order/getByID', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.'});

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
    if(!req.user.admin)
        return res.json({success: false, msg : 'Unauthorized.', err: err});
    let edited = {
        status       : req.body.status,
    };
    Order.findByIdAndUpdate(req.body.id, edited)
    
            .then((orders)=> {res.json({success: true, msg : 'Order edited.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to edit order.', err: err})});
    
})



router.get('/order/findByUser',passport.authenticate('jwt', {session: false}), (req, res, next) => {
    
    Order.find({customer: req.user._id})
    
            .then((orders)=> {res.json({success: true, msg : 'Orders that belongs to '+ req.body.id +' list.', orders: orders})})
            .catch((err) => {res.json({success: false, msg : 'Failed to find orders.', err: err})});
    
})


module.exports = router;