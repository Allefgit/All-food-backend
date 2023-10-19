
const BuyingRepository = require("../repositories/BuyingRepository")
const BuyingCreateServices = require("../services/BuyingCreateServices")
const BuyingDeleteServices = require("../services/BuyingDeleteServices")
const BuyingIndexServices = require("../services/BuyingIndexServices")

class BuyingController{

    async create(req, res) {
        const { dish_id } = req.params
        const { qtd } = req.body
        const user_id = await req.user.id

        const buyingRepository = new BuyingRepository()
        const buyingCreateServices = new BuyingCreateServices(buyingRepository)

        await buyingCreateServices.execute( {dish_id, user_id, qtd } )
        return res.status(201).json()
    }

    async delete(req, res){
        const { dish_id } = req.params;
        const user_id = await req.user.id
 
        const buyingRepository = new BuyingRepository()
        const buyingDeleteServices = new BuyingDeleteServices(buyingRepository)

        await buyingDeleteServices.execute( { user_id, dish_id } )
        return res.status(201).json()
    }

    async index(req, res){
        const user_id = await req.user.id

        const buyingRepository = new BuyingRepository()
        const buyingIndexServices = new BuyingIndexServices(buyingRepository)

        const buying =  await buyingIndexServices.execute( { user_id } )

        return res.json(buying)
    }
}

module.exports = BuyingController