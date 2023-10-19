const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

//verifica a autorização do usuário
function ensureAuthenticated(req, res, next){
    const authHeader = req.headers.authorization

    //verifica o JWT que o session gerou
    if(!authHeader){
        throw new AppError("JWT não informado!", 401)
    }

    //O token vem da seguinte forma: "Bare Token", e como não é necessário pegar o Bare, utilizamos apenas o token 
    const [, token] = authHeader.split(" ")

    //tenta coletar o id do usuário que vem no token
    try{
        //sub é o conteúdo importante armazenado dentro do token
        const {sub: user_id} = verify(token, authConfig.jwt.secret)
        req.user = {
            id: Number(user_id), 
        };

        return next()
    } catch{
        throw new AppError("JWT inválido!", 401)
    }
} 

module.exports = ensureAuthenticated