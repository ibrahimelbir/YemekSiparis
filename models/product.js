const mongoose =require('mongoose');

const productSchema = mongoose.Schema({
    
    name    : {
        type : String,
        required : true,
        unique: true
    },

    description    : {
        type : String,
        required : true
    },

    category    : {
        type : String,
        required : true
    },

    price  : {
        type : Number,
        required : true
    },

    joindate    : {
        type : Date,
        default : Date.now(),
        required : true
    },

    addedby    : {
        type : String,
        required : true
    },

    time    :{
        type: Number,
        required: true,
        default: 30
    },
    image    :{
        type : String,
        required : true,
        default: "none"
    }

})

const Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getUserById =  function (id, callback) {
    Product.findById(id)
    .then((user)=> {return callback(null,user)})
    .catch((err) => {return callback(err)});

}

module.exports.getProductByName = function (name, callback){
    const query = { name : name }
    Product.findOne(query).then((data) => {;return callback(null,data.orderedby.size())}).catch((err) => {return callback(err)});
}

module.exports.getProductOrderSize = function (name, callback){
    const query = { name : name }
    Product.find(query).then((data) => {return callback(null,data)}).catch((err) => {return callback(err)});
}