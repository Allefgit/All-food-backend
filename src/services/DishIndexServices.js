class DishIndexServices{

    //coleta a classe DishRepository para poder utilizar as funções
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    async execute( {category, name} ){

        //usa a função index da classe DishRepository
        const dishIndex = this.dishRepository.index({
            category,
            name
        })
        
        //retorna os pratos encontrados na requisição
        return dishIndex
    }
}

module.exports = DishIndexServices