const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mongo',{
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log('Connect sucsessfully')
    }catch(error){
        console.log('connect failed')
    }
}

module.exports = {connect};