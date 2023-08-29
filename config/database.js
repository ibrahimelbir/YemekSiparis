require('dotenv').config();
module.exports = {
    uri : `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@personal.inl8dtt.mongodb.net/?retryWrites=true&w=majority`,
    secret : process.env.SECRET
}