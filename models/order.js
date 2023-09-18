const mongoose =require('mongoose');

const orderSchema = mongoose.Schema({
    
    product    : {
        type : String,
        required : true,
    },

    customer    : {
        type : Boolean,
        required : true,
    },

    orderdate    : {
        type : Date,
        default : Date.now(),
        required : true
    },

    status    : {
        type : Number,
        required : true,
        default: 0,
    },
    note    : {
        type : String
    },

})

const Order = module.exports = mongoose.model('Order', orderSchema );

module.exports.getCategoryById =  function (id, callback) {
    Category.findById(id)
    .then((user)=> {return callback(null,user)})
    .catch((err) => {return callback(err)});

}

module.exports.getOrdersByCustomer = function (id, callback){
    const query = { customer : id }
    Category.find(query).then((data) => {;return callback(null,data)}).catch((err) => {return callback(err)});
}
