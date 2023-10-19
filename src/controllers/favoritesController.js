
const FavoriteRepository = require("../repositories/FavoriteRepository")
const FavoriteDeleteServices = require("../services/FavoriteDeleteServices")
const FavoriteCreateServices = require("../services/FavoriteCreateServices")
const FavoriteIndexServices = require("../services/FavoriteIndexServices")

//controles de funções referentes ao usuário
class FavoritesController{
    //cria um usuário
    async create(req, res) {
        const { dish_id } = req.params
        const user_id = await req.user.id

        const favoriteRepository = new FavoriteRepository()
        const favoriteCreateServices = new FavoriteCreateServices(favoriteRepository)

        await favoriteCreateServices.execute( {dish_id, user_id} ) 
        return res.status(201).json()
    }

    async delete(req, res){
        const { favorite_id } = req.params;
        const user_id = await req.user.id
 
        const favoriteRepository = new FavoriteRepository()
        const favoriteDeleteServices = new FavoriteDeleteServices(favoriteRepository)

        await favoriteDeleteServices.execute( { favorite_id, user_id } ) 
        return res.status(201).json()
    }

    async index(req, res){
        const user_id = await req.user.id

        const favoriteRepository = new FavoriteRepository()
        const favoriteIndexServices = new FavoriteIndexServices(favoriteRepository)

        const favorites =  await favoriteIndexServices.execute( { user_id } )

        return res.json(favorites)
    }
}

module.exports = FavoritesController