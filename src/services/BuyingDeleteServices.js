const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class BuyingDeleteServices{

    constructor(buyingRepository){
        this.buyingRepository = buyingRepository
    }

    //executa a função de deletar a vinculação de compra
    async execute( { user_id, dish_id } ){

        //verifica se a vinculação existe
        const buyExists = await knex("dishesBuying")
        .where( {dish_id: dish_id} )
        .andWhere({user_id: user_id})
        .first()

        if(!buyExists){
            throw new AppError("Essa vinculação não encontrado!")
        }

        //deleta a vinculação de compra
        const ligationDelete = this.buyingRepository.delete( { user_id, dish_id } )
        
        return ligationDelete
    }
}

module.exports = BuyingDeleteServices