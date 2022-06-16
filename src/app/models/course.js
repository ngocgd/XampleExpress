const mongoose = require('mongoose');
const schema = mongoose.Schema;

const course2 = new schema({
    name : {type:String},
    description :{type : String},
    image : {type : String},
    createdAt :{type : Date,default : Date.now},
    updatedAt :{type : Date,default : Date.now},
})

module.exports = mongoose.model('course2',course2)