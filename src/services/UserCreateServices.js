const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")

class UserCreateServices {

    //coleta a classe UserRepository para poder utilizar as funções
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({name, email, password, admin}){

        //verifica se o usuário já existe
        const chefIfUserExist = await this.userRepository.findByEmail(email)
        if (chefIfUserExist){  
            throw new AppError("Este e-mail já está em uso.")
        }
        
        //encriptografa a senha
        const hashedPassword = await hash(password, 8)

        //usa a função create da classe UserRepository
        const userCreated  = await this.userRepository.create({ 
                name, 
                email, 
                password: hashedPassword, 
                admin : admin ? admin : false 
            })

        return userCreated
    }
}

module.exports = UserCreateServices