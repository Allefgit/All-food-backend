const { Router } = require("express")

const TagsController = require("../controllers/tagsController")
const tagsController = new TagsController()

const tagRoutes = Router()

//rotas referentes às tags: 
tagRoutes.get("/:dish_id", tagsController.index)

//exporta as rotas das tags
module.exports = tagRoutes
