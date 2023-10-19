const knex = require("../database/knex")

class BuyingRepository {
        
    async create( { user_id, dish_id, qtd } ){

        await knex("dishesBuying").insert({
            user_id: user_id, 
            dish_id: dish_id,
            qtd: qtd
        })
    }

    async delete( { user_id, dish_id } ){
        await knex("dishesBuying")
        .where( {dish_id: dish_id} )
        .andWhere( {user_id: user_id} )
        .delete()
    }

    async index( { user_id } ){
        return await knex("dishesBuying")
        .where( {user_id: user_id})
        .innerJoin("dishes", "dishes.id", "dish_id" )
    }
}

module.exports = BuyingRepository