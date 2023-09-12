const mongoose =require('mongoose');

const categorySchema = mongoose.Schema({
    
    name    : {
        type : String,
        required : true,
        unique: true
    },

    valid    : {
        type : Boolean,
        required : true,
        default: true
    },

    createdate    : {
        type : Date,
        default : Date.now(),
        required : true
    },

    addedby    : {
        type : String,
        required : true
    }

})

const Category = module.exports = mongoose.model('Category', categorySchema );

module.exports.getUserById =  function (id, callback) {
    Category.findById(id)
    .then((user)=> {return callback(null,user)})
    .catch((err) => {return callback(err)});

}

module.exports.getProductByName = function (name, callback){
    const query = { name : name }
    Category.findOne(query).then((data) => {;return callback(null,data.orderedby.size())}).catch((err) => {return callback(err)});
}
