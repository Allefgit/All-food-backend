const { Router } = require("express")

//improta as rotas a serem utilizadas
const tagRoutes = require("./tags.routes")
const userRoutes = require("./users.routes")
const dishRoutes = require("./dishes.routes")
const buyingRoutes = require("./buying.routes")
const sessionRoutes = require("./sessions.routes")
const favoritesRoutes = require("./favorites.routes")

const routes = Router()

//gerencia todas as rotas
routes.use("/tags", tagRoutes)
routes.use("/users", userRoutes)
routes.use("/dishes", dishRoutes)
routes.use("/buying", buyingRoutes)
routes.use("/sessions", sessionRoutes)
routes.use("/favorites", favoritesRoutes)

module.exports = routes