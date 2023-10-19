const { Router } = require("express")
const UsersController = require("../controllers/usersController")
const verifyUserData = require("../middlewares/verifyUserData")

const usersRoutes = Router()
const usersController = new UsersController()

//rotas referentes ao usuário: 
usersRoutes.post("/", verifyUserData, usersController.create)

//exporta as rotas do usuário 
module.exports = usersRoutes