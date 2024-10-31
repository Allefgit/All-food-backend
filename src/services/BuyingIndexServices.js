const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class BuyingIndexServices{

    constructor(buyingRepository){
        this.buyingRepository = buyingRepository
    }

    //executa o comando de criação 
    async execute( { user_id }  ){

        const userExists = await knex("users").where( {id: user_id} ).first()
        if(!userExists){
            throw new AppError(" Usuário não identificado. Logue novamente! ")
        }
        
        const dishesBuying = this.buyingRepository.index({
            user_id
        })
        
        return dishesBuying
    }
}

module.exports = BuyingIndexServices