const mongoose = require('mongoose');
const schema = mongoose.Schema;

const accounts = new schema({
    email : {type : String},
    phone : {type : String},
    username : {type : String},
    password : {type : String},
    role : {type : String}
})
module.exports = mongoose.model('accounts', accounts);