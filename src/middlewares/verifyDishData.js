const AppError = require("../utils/AppError")

//verifica se os campos foram preenchidos corretamente
async function verifyDishData(req, res, next){

    //coletando os dados
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const tag = req.body.tag;
    const description = req.body.description
    
    //O sistema apresentava erros quando vinha em imagem, por que não encontrava o filename, então fiz da seguinte forma:
    const img = req.file ? req.file.filename : ""

    const verifyIfDataIsNotEmpty = (
            (!img || !name || !category || !price || !tag) || 
            (img.trim() === "" || name.trim() === "" || category.trim() === "" || price.trim() === "" || tag.trim() === "")
        )

    if(verifyIfDataIsNotEmpty){
        throw new AppError("Os campos 'imagem, nome, categoria, ingredientes e preço' são obrigatórios!")
    }

    //verificando se o campo 'Categoria' está de acordo com as opções
    const verifyCategoryIsNotCorrect = category.toUpperCase() != "REFEICAO" && category.toUpperCase() != "BEBIDA" && category.toUpperCase() != "SOBREMESA"
    if(verifyCategoryIsNotCorrect){
        throw new AppError("O Campo 'Categoria' pode ser apenas: 'refeicao', 'bebida' ou 'sobremesa'!")
    }

    return next()
}

module.exports = verifyDishData