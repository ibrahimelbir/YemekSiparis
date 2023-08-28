const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@personal.inl8dtt.mongodb.net/?retryWrites=true&w=majority`).then(
    ()=>{
        console.log("Database connection succeed.")
    }, err =>{
        console.error("Database connection failed.")
    })

const app = express();
const users = require('./routes/users');


app.use('/users', users);


app.use(cors()); 
app.use(bodyParser.json());


app.get('/', (req,res)  =>  {
    res.send('Success...');
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}.`)
})