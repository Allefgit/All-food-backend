//Classe de erro customizada: 
class AppError{
    message;
    statusCode;

    //retorna a mensagem colocada na hora do erro, e também os status, caso não tenha status, retorna o 400
    constructor(message, statusCode = 400){
        this.message = message
        this.statusCode = statusCode
    }
}

module.exports = AppError