const multer = require("multer")
const { Router } = require("express")
const uploadConfig = require("../configs/upload")

const adminVerify = require("../middlewares/adminVerify")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const verifyDishData = require("../middlewares/verifyDishData")

const DishesController = require("../controllers/dishesController")
const dishesController = new DishesController()

const dishRoutes = Router()
const upload = multer(uploadConfig.MULTER)

//rotas referentes ao prato: 
dishRoutes.get("/:dish_id", dishesController.show)
dishRoutes.post("/", ensureAuthenticated, adminVerify, upload.single("img"), verifyDishData, dishesController.create)
dishRoutes.put("/:dish_id", ensureAuthenticated, adminVerify, upload.single("img"), dishesController.update)
dishRoutes.delete("/:dish_id", ensureAuthenticated, adminVerify, dishesController.delete)
dishRoutes.get("/", dishesController.index)

//exporta as rotas
module.exports = dishRoutes