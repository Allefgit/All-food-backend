const knex = require('../database/knex')
const AppError = require("../utils/AppError")
const {compare} = require("bcryptjs")

const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

//controles de funções referentes ao acesso do usuário (de acordo com o token)
class SessionsController{

    //cria o token
    async create(req, res){

        const {email, password} = req.body

        //verifica se o email existe e coleta os dados do usuário, caso exista
        const user = await knex("users").where({email}).first()
        if(!user){
            throw new AppError("Este e-mail não possui vinculação com usuário algum!", 401)
        }

        //verifica se a senha está correta
        const passwordCheck = await compare(password, user.password)
        if(!passwordCheck){
            throw new AppError("E-mail e/ou senha incorreto", 401)
        }

        //efetua a criação do token, colocando o id do usuário como informação
        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        //retorna o usuário e o token do mesmo
        return res.json({user, token})
    }
}

module.exports = SessionsController