const AppError = require("../utils/AppError")

//verifica se os campos foram preenchidos corretamente
async function verifyUserData(req, res, next){
    const {name, email, password} = req.body;

    //verifica se os campos estão todos digitados
    const verifyIfDataIsNotEmpty = !name || !email || !password
    if(verifyIfDataIsNotEmpty){
        throw new AppError("Digite todos os campos!")
    }

    //verifica se a senha possui no mínimo 6 dígitos
    if(password.length < 6){
        throw new AppError("A senha deve possuir ao menos 6 caracteres!")
    }

    return next()
}

module.exports = verifyUserData