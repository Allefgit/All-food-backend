const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class FavoriteIndexServices{

    constructor(favoriteRepository){
        this.favoriteRepository = favoriteRepository
    }

    //executa o comando de criação 
    async execute( { user_id }  ){

        const userExists = await knex("users").where( {id: user_id} ).first()
        if(!userExists){
            throw new AppError("Esse usuário não existe")
        }
        
        const dishesFavorites = await this.favoriteRepository.index({
            user_id
        })
        
        return dishesFavorites
    }
}

module.exports = FavoriteIndexServices