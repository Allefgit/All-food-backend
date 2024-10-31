const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class BuyingCreateServices{

    constructor(buyingRepository){
        this.buyingRepository = buyingRepository
    }

    //executa a função de incluir o prato nas pendencias de compra do usuário
    async execute( { user_id, dish_id, qtd }  ){

        //verifica se o prato existe
        const DishExist = await knex("dishes").where( {id: dish_id} ).first()
        if(!DishExist){
            throw new AppError("Esse prato não existe!")
        }

        //verifica se a quantidade é válida
        if( isNaN( qtd / 1 ) || qtd < 1 ){
            throw new AppError("A quantidade deve ser maior do que 1 e deve estar dentro dos números reais!")
        }

        //verifica se a ligação entre usuário e prato já existe
        const ligationExists = await knex("dishesBuying")
            .where( {dish_id: dish_id} )
            .andWhere({user_id: user_id})
            .first()
            
        if(ligationExists){
            throw new AppError("Você já está comprando este item!")
        }
        
        //cria a ligação entre o prato a ser comprado e o usuário
        const dishesBuying = this.buyingRepository.create({
            user_id, 
            dish_id,
            qtd
        })
        
        return dishesBuying
    }
}

module.exports = BuyingCreateServices