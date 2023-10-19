const knex = require("../database/knex")

//controles de funções referentes às tags
class TagsController{
    //exibe todas as tags
    async index(req, res){
        const {dish_id} = req.params

        //coleta as tags de acordo com o id do prato
        const tags = await knex("tags")
        .where({dish_id})
        .groupBy("title")

        return res.json(tags)
    }
}

module.exports = TagsController