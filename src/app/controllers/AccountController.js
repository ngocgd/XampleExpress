
const { redirect } = require('statuses');
const accounts = require('../models/account');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const crypto = require('crypto-js');
const createError = require('http-errors');

class AccountController{
    showAllAccount(req,res,next){
        accounts.find({})
        .then((account)=>{
            res.render('account/register',{
                accounts:mutipleMongooseToObject(account)
            });
        })
        .catch((err)=>next(err))
    }
    register(req,res,next){
        res.render('account/RegisterForm');
    }
    async create(req,res,next){
        const formData = req.body;
        // Encrypt password by bcrypt
        // const salt = await bcrypt.genSalt(10);
        // req.body.password = await bcrypt.hash(req.body.password, salt);
        req.body.password = crypto.AES.encrypt(req.body.password,'secretKey').toString();
        const username = req.body.username;
        const email = req.body.email;
        var account = new accounts(formData);
        const user = await accounts.findOne({ username: username });
        const user2 = await accounts.findOne({ email: email });
        if(user2){
            res.send('email is already exists');
        }else if(user){
            createError[404];
            res.send('Username is already exists');
        }
        // Decrypt password
        // req.body.password = crypto.AES.decrypt(req.body.password,'secretKey').toString(crypto.enc.Utf8)   
        else{
        account.save()
       .then(() => res.redirect('/user/login'))
       .catch((err) => next(err))
        }
    }
    delete(req,res,next){
        accounts.deleteOne({_id : req.params.id})
        .then(() => res.redirect('/user/showAll'))
        .catch((err) => next(err))
    }
    login(req,res,next){
        res.render('account/login');
    }
}
module.exports = new AccountController();
