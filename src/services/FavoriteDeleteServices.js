const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class FavoriteDeleteServices{

    constructor(favoriteRepository){
        this.favoriteRepository = favoriteRepository
    }

    //executa o comando de deletar 
    async execute( { favorite_id, user_id }  ){

        //verifica se o prato já realmente está nos favoritos
        const favoriteExists = await knex("dishesFavorites")
        .where( {dish_id: favorite_id} )
        .andWhere( {user_id: user_id} )
        .first()
        
        if(!favoriteExists){
            throw new AppError("Essa ligação não foi encontrada!")
        }

        //deleta a ligação de favorito 
        const ligationDelete = this.favoriteRepository.delete( { favorite_id, user_id } )
        
        return ligationDelete
    }
}

module.exports = FavoriteDeleteServices