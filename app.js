const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');
const session       = require('express-session');
const db            = require('./config/database');
require('dotenv').config();

mongoose.connect(db.uri).then(
    ()=>{
        console.log("Database connection succeed.")
    }, err =>{
        console.error("Database connection failed.")
        console.log(err);
    })

const app = express();

// Middleware Cors
app.use(cors());

// Middleware Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// Middleware Passport
app.use(session({
    secret: db.secret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use(express.static(path.join(__dirname, 'public')));

const user = require('./routes/user');
const database = require('./config/database');

app.use('/', user);




app.get('/', (req,res)  =>  {
    res.send('Success...');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}.`)
})