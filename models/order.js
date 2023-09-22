const mongoose =require('mongoose');

const orderSchema = mongoose.Schema({
    
    product    : {
        type : String,
        required : true,
    },

    customer    : {
        type : String,
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
    Order.findById(id)
    .then((user)=> {return callback(null,user)})
    .catch((err) => {return callback(err)});

}

module.exports.getOrdersByCustomer = function (id, callback){
    const query = { customer : id }
    Order.find(query).then((data) => {return callback(null,data)}).catch((err) => {return callback(err)});
}

module.exports.deleteById = function (id, callback){
    Order.findByIdAndDelete(id).then((data) => {return callback(null,data);}).catch((err) => {return callback(err)});
}
