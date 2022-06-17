const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const course = new schema({
    name : {type:String},
    description :{type : String},
    image : {type : String},
    videoid : {type : String},
    slug : {type : String, slug:'name',unique : true},
    createdAt :{type : Date,default : Date.now},
    updatedAt :{type : Date,default : Date.now},
})
module.exports = mongoose.model('courses',course)