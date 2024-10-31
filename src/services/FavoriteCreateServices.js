const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class FavoriteCreateServices{

    constructor(favoriteRepository){
        this.favoriteRepository = favoriteRepository
    }

    //executa o comando de criação 
    async execute( { user_id, dish_id }  ){

        const DishExist = await knex("dishes").where( {id: dish_id} ).first()
        if(!DishExist){
            throw new AppError("Esse prato não existe!")
        }

        //verifica se já existe essa ligação
        const favoriteExists = await knex("dishesFavorites")
            .where( {dish_id: dish_id} )
            .andWhere({user_id: user_id})
            .first()

        if(favoriteExists){
            throw new AppError("Este prato já está nos seus favoritos!")
        }
        
        //cria a ligação de favorito
        const dishFavorite = this.favoriteRepository.create({
            user_id, 
            dish_id 
        })
        
        return dishFavorite
    }
}

module.exports = FavoriteCreateServices