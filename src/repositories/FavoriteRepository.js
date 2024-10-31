const knex = require("../database/knex")

class FavoriteRepository {

    //Cria uma vinculação entre usuário e pratos favoritos
     async create( { user_id, dish_id } ){

        //executa a criação da vinculação
        await knex("dishesFavorites").insert({
            user_id: user_id, 
            dish_id: dish_id
        })
    }

    //deleta a vinculação
    async delete( { favorite_id, user_id } ){

        await knex("dishesFavorites")
        .where( {dish_id: favorite_id} )
        .andWhere( {user_id: user_id} )
        .delete()
    }

    async index( { user_id } ){

        return await knex("dishesFavorites")
        .where( {user_id: user_id})
        .innerJoin("dishes", "dishes.id", "=",  "dish_id" )
    }
}

module.exports = FavoriteRepository