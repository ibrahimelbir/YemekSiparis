const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    
    email   : {
        type : String,
        required : true,
        unique: true
    },
    
    password: {
        type : String,
        required : true
    },

    name    : {
        type : String,
        required : true
    },

    surname    : {
        type : String,
        required : true
    },

    adress  : {
        type : String,
        required : true
    },

    birthdate    : {
        type : Date,
        max : Date.now(),
        required : true,
    },

    registerdate    : {
        type : Date,
        default : Date.now(),
        required : true
    },

    orders: {
        type: Array,
        default : [],
        required: true
    }

})

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById =  function (id, callback) {
    User.findById(id)
    .then((user)=> {return callback(null,user)})
    .catch((err) => {return callback(err)});

}

module.exports.getUserByEmail = function (email, callback){
    const query = { email : email }
    User.findOne(query).then((data) => {return callback(null,data)}).catch((err) => {return callback(err)});
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, async( errh, hash ) => {
            if(errh) throw errh;
            newUser.password = hash ;
            newUser.save()
            .then((user)=> {return callback(null,user)})
            .catch((err) => {return callback(err)});
        });
    });

}
module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash , (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}