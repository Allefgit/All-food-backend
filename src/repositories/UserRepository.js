const knex = require("../database/knex")

class UserRepository{

    //acha um usuário pelo e-mail para verificação da existência do mesmo
    async findByEmail(email){
        const userExists = await knex("users").where({email}).first()
        return userExists
    }

    //executa a criação do usuário no banco
    async create({ name, email, password, admin }){

        //insere o usuário no banco de dados:
        const user_id = await knex("users").insert({
            name: name.trim(), 
            email: email.trim(),
            password,
            admin
        })

        //retorna o ID do usuário criado
        return { id: user_id }
    }
}

module.exports = UserRepository