const jwt = require('jsonwebtoken')
const createError = require('http-errors');
const client = require('./connection-redis')
const accounts = require('./app/models/account')

const signAccessToken = async(userId)=>{
    return new Promise((resolve, reject) =>{
        const payload = {
            userId
        }
        const secret ='secretKey';
        const options = {
            expiresIn : '100000s'
        }
        jwt.sign(payload,secret,options,(err,token)=>{
            if(err) reject(err)
            resolve(token)
        })
    })
}

const verifyAccessToken = (req,res,next)=>{
    if(!req.cookies.Token){
        res.status(401).json({message:'Token is expired'});
    }
    const token = req.cookies.Token;
    jwt.verify(token,'secretKey',(err,payload)=>{
        if(err){
            res.status(401).json({message:err});
        }
        accounts.findOne({_id:payload.userId})
        .then(data=>{
            req.data = data;
            next();
        })
        .catch(err=>next(err));
    })
}

const signRefreshToken = async(userId)=>{
    return new Promise((resolve, reject) =>{
        const payload = {
            userId
        }
        const secret ='refreshToken';
        const options = {
            expiresIn : '1y'
        }
        jwt.sign(payload,secret,options,(err,token)=>{
            if(err) reject(err)
            client.set(userId.toString(),token,{EX: 1000, NX: true},(err,reply)=>{
                if(err){
                    return reject(createError.InternalServerError());
                }
                resolve(token);
            })
            resolve(token);
        })
    })
}
const checkUser = (req, res,next) => {
    if(req.data.role === 'user' || req.data.role === 'admin' ){
        next();
    }else{
        res.json('Not permissions');
    }
}
const checkAdmin = (req, res, next) => {
    if(req.data.role === 'admin'){
        next();
    }else{
        res.json('Not permissions')
    }
}
module.exports = {
    signAccessToken,
    verifyAccessToken,
    signRefreshToken,
    checkUser,
    checkAdmin
}