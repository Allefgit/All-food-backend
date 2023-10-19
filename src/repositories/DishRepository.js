const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DishRepository {
    async create( {name, category, price, description, img, tags} ){
        
        //inicia o armazenamento local, salvando a imagem 
        const diskStorage = new DiskStorage()
        const fileName = await diskStorage.saveFile(img)

        //insere o prato 
        const [dish_id] = await knex("dishes").insert({
            img: fileName,
            name: name.trim(),
            description: description.trim(),
            category: category.trim(),
            price: price.trim()
        })

        //adiciona o id do prato na tag, para a vinculação dos mesmos, e também trata o title da tag
        const tagsToInsert = tags.map(title => {
            return {
                title: title.trim(),
                dish_id
            }
        })

        //insere a tag no banco de dados
        await knex("tags").insert(tagsToInsert)
    }

    async update( {dish, tags} ){

        const dish_id = dish.id

        if(tags){
            await knex("tags").where({dish_id:dish_id}).delete()
            await knex("tags").insert(tags)
        }

        await knex("dishes").where({id: dish_id}).update(dish)
    }

    async delete( {dish_id} ){
        await knex("dishes").where( { id:dish_id } ).delete()
    }

    async show( {dish_id} ){
        return await knex("dishes").where( {id: dish_id} ).first()
    }   

    async index( {category, name} ){

        return await knex("dishes")
        .innerJoin("tags", function(){
            this.on(function() {
                this.on("tags.dish_id", "=", "dishes.id")
            })
        })
        .where("dishes.category", "like", `%${category}%`)
        .andWhere(function() {
            this.where("dishes.name", "like", `%${name}%`)
            this.orWhere("tags.title", "like", `%${name}%`)
        })
        .groupBy("dishes.name")    
    }
}

module.exports = DishRepository