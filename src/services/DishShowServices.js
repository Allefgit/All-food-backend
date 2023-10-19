const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class DishShowServices{

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
        
        //usa a função show da classe DishRepository
        const dishShowed = this.dishRepository.show({
            dish_id
        })
        
        //retorna o prato encontrado na requisição
        return dishShowed
    }
}

module.exports = DishShowServices