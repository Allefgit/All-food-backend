const { Router } = require("express")

const BuyingController = require("../controllers/buyingController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const buyingController = new BuyingController()

const buyingRoutes = Router()

//rotas referentes as compras: 
buyingRoutes.post("/:dish_id", ensureAuthenticated, buyingController.create)
buyingRoutes.delete("/:dish_id", ensureAuthenticated, buyingController.delete)
buyingRoutes.get("/", ensureAuthenticated, buyingController.index)

//exporta as rotas das compras
module.exports = buyingRoutes