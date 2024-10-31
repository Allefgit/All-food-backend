require("express-async-errors")

require("dotenv/config")
const database = require('./database/knex')

const uploadConfig = require("./configs/upload")
const AppError = require("./utils/AppError")
const express = require("express")
const routes = require("./routes")

//atende as requisições do front-end
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

//Inicia as rotas
app.use(routes)

//Usado para retornar a imagem que for requisitada na rota "files"
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

//inicia o banco de dados através do knex
database.queryBuilder()

//verifica os erros
app.use((error, req, res, next) =>{
    
    //se o erro for lançado pelo nosso lançador de erro custmozável, ele irá exibir o erro lançado em tela
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            error: "error",
            message: error.message
        })
    }

    //do contrário exibirá o erro completo no terminal 
    console.error(error)

    //e exibirá a mensagem padrão para o usuário  
    res.status(500).json({
        error: "error",
        message: "Internal server error"
    })
})

//usado para acessar a porta automaticamente
const PORT = process.env.PORT || 3333
//mostra que o servidor está no ar
app.listen(PORT, () => {console.log(`Server is running on port`, PORT)}) 
