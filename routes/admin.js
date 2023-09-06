const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database')
require('dotenv').config;

router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.send(req.user.admin);
})

module.exports = router;