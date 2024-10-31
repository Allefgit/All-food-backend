const UserRepository = require('../repositories/UserRepository')
const UserCreateServices = require('../services/UserCreateServices');

//controles de funções referentes ao usuário
class UsersController{
    //cria um usuário
    async create(req, res) {
        const {name, email, password, admin} = req.body;

        const userRepository = new UserRepository()
        const userCreateServices = new UserCreateServices(userRepository)

        await userCreateServices.execute({name, email, password, admin})
        return res.status(201).json()
        
    }
}

module.exports = UsersController