
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")
const knex = require("../database/knex")

class DishUpdateServices{

    //coleta a classe DishRepository para poder utilizar as funções
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    async execute( {dish_id, name, category, price, description, img, tags} ){
        
        //iniciando o armazenamento local
        const diskStorage = new DiskStorage()

        //verificando se o prato existe
        const dish = await knex("dishes").where({id: dish_id}).first()
        if(!dish){
            throw new AppError("Prato não encontrado!", 401)
        }


        //verifica se tem imagem, caso tenha, será excluída 
        if(dish.img && img !== null){
            await diskStorage.deleteFile(dish.img)
        }

        //grava a imgagem no armazenamento local
        let fileName
        if(img){
            fileName = await diskStorage.saveFile(img)
        }

        //insere os novos dados no prato
        dish.img = fileName ?  fileName : dish.img
        dish.name = name ? name : dish.name
        dish.description = description ? description : dish.description
        dish.price = price ? price : dish.price
        dish.category = category ? category : dish.category
        dish.updated = knex.fn.now()

        //caso tenha tags, serão tratadas 
        let newTags
        if(tags){
            newTags = tags.map(title => {
                return {
                    title: title.trim(),
                    dish_id
                }
            })
        }

        //usa a função update da classe DishRepository
        const dishUpdated = this.dishRepository.update({
           dish, 
           tags: newTags
        })

        return dishUpdated
    }
}

module.exports = DishUpdateServices