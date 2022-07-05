
const { redirect } = require('statuses');
const accounts = require('../models/account');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const crypto = require('crypto-js');
const {signAccessToken,signRefreshToken,verifyAccessToken} = require('../../jwt_services')


class AuthenticationController{
    async authen(req,res,next){
    const account = await accounts.findOne({username : req.body.username})
        if(!account){
            res.status(401).send('Khong co tai khoan')
        }else{
            const password = await crypto.AES.decrypt(account.password,'secretKey').toString(crypto.enc.Utf8);
            // const validPassword = await bcrypt.compare(req.body.password, account.password);
            const validPassword = (password === req.body.password); 
            if (validPassword) {
              const accessToken = await signAccessToken(account._id);
              const refreshToken = await signRefreshToken(account._id);    
              res.cookie('Token',accessToken,{expires: new Date(Date.now() + 1000*60*60*24)});
              res.redirect('/home/1');
            } else {
              res.redirect('/user/login')
            }
        }
    }

}
module.exports = new AuthenticationController();
