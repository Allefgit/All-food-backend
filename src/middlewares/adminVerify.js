const AppError = require("../utils/AppError")
const knex = require("../database/knex")

//verifica se o usuário é admin
async function adminVerify(req, res, next){
    console.log(req)
    const user_id = req.user.id

    //coleta os dados do usuário segundo o id do token
    const user = await knex("users").where({id :user_id}).first()
    if(!user.admin){
        throw new AppError("Você não é um usuário administrador!", 401)
    }

    return next()

}

module.exports = adminVerify