const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database')
require('dotenv').config;

router.get('/login', (req, res, next) => {
    res.send('Login')
})

router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err,user) => {
        if (err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found.'})
        }
        User.comparePassword(password, user.password, (err,isMatch) => {
            if(err) throw err;
            console.log(isMatch);
            if(isMatch){
                const token = jwt.sign(user.toJSON(),config.secret, {
                    expiresIn : 259200 // 3 days
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user :{
                        id: user._id,
                        name: user.name,
                        surname: user.surname,
                        adress: user.adress,
                        birthdate: user.birthdate
                    }
                })
            } else {
            return res.json({success: false, msg: 'Wrong password.'})
                
            }
        })
    })
})

router.post('/register', (req, res, next) => {
    let newUser = new User ({
        email   : req.body.email,
        password: req.body.password,
        name    : req.body.name,
        surname : req.body.surname,
        adress : req.body.adress,
        birthdate   : req.body.birthdate
    });
    User.addUser(newUser, (err,user) => {
        if(err){
            res.json({success: false, msg : 'Failed to register user.' + err})
        }else{
            res.json({success: true, msg : 'User registered.' + user})
        }
    })
    
})

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user})
})

module.exports = router;