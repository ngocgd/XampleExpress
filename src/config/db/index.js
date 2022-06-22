const mongoose = require('mongoose')
//Async await try/catch
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mongo',{
        });
        console.log('Connect sucsessfully')
    }catch(error){
        console.log('connect failed')
    }
}

module.exports = {connect};