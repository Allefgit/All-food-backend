const DishRepository = require("../repositories/DishRepository")
const DishShowServices = require("../services/DishShowServices")
const DishIndexServices = require("../services/DishIndexServices")
const DishCreateServices = require("../services/DishCreateServices")
const DishUpdateServices = require("../services/DishUpdateServices")
const DishDeleteServices = require("../services/DishDeleteServices")

//controles de funções referentes ao prato
class DishesController{
    //cria um prato
    async create(req, res) {

        //coleta e trata os dados 
        //não é necessário uma profunda verificação, pois ja foi feito no middleware
        const { name, category, tag, price, description } = req.body;
        const img = req.file.filename
        const tags = tag ? tag.split(",") : false

        const dishRepository = new DishRepository() 
        const dishCreateServices = new DishCreateServices(dishRepository)

        await dishCreateServices.execute({name, category, price, description, img, tags})
        return res.status(201).json()
    }

    //atualiza o prato
    async update(req, res){

        //coletando e tratando os dados

        const { dish_id } = req.params
        const { name, category, tag, price, description} = req.body
        const img = req.file ? req.file.filename : null
        const tags = tag ? tag.split(",") : false

        const dishRepository = new DishRepository() 
        const dishUpdateServices = new DishUpdateServices(dishRepository)

        await dishUpdateServices.execute({dish_id, name, category, price, description, img: img, tags})
        return res.status(201).json()
    }

    //deleta o prato
    async delete(req, res){
        //coleta o id o prato à ser deletado
        const { dish_id } = req.params

        const dishRepository = new DishRepository() 
        const dishDeleteServices = new DishDeleteServices(dishRepository)

        await dishDeleteServices.execute( {dish_id} )
        return res.status(201).json()
    }

    //mostra um prato
    async show(req, res){
        //coleta o id o prato à ser mostrado
        const {dish_id} = req.params

        const dishRepository = new DishRepository() 
        const dishShowServices = new DishShowServices(dishRepository)

        const dish =  await dishShowServices.execute( {dish_id} )

        return res.json(dish)
    }

    //mostra mais de um prato de acordo com a categoria
    async index(req, res){
        const { category, name } = req.query

        const dishRepository = new DishRepository() 
        const dishIndexServices = new DishIndexServices(dishRepository)

        const dishes =  await dishIndexServices.execute( {category, name} )

        return res.json(dishes)
    }
}

module.exports = DishesController