const { Router } = require("express")

const SessionsController = require('../controllers/sessionsController')
const sessionsController = new SessionsController()

const sessionRoutes = Router()

//rotas da sessão do usuário: 
sessionRoutes.post("/", sessionsController.create)

//exporta as rotas de sessão
module.exports = sessionRoutes