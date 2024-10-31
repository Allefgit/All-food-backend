const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const FavoritesRepository = require("../controllers/favoritesController")
const favoritesRepository = new FavoritesRepository()

const favoritesRoutes = Router()

//rotas referente ao favoritas
favoritesRoutes.post("/:dish_id", ensureAuthenticated, favoritesRepository.create)
favoritesRoutes.delete("/:favorite_id", ensureAuthenticated, favoritesRepository.delete)
favoritesRoutes.get("/", ensureAuthenticated, favoritesRepository.index)

//exporta as rotas de favoritar
module.exports = favoritesRoutes