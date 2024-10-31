const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class DishDeleteServices{

    //coleta a classe DishRepository para poder utilizar as funções
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    async execute( {dish_id} ){

        //verifica se o prato existe
        const dish = await knex("dishes").where({id:dish_id}).first()
        if(!dish){
            throw new AppError("Prato não encontrado!")
        }
        
        //usa a função delete da classe DishRepository
        const dishDeleted = this.dishRepository.delete({
            dish_id
        })
        
        return dishDeleted
    }
}

module.exports = DishDeleteServices