class DishCreateServices{

    //coleta a classe DishRepository para poder utilizar as funções
    constructor(dishRepository){
        this.dishRepository = dishRepository
    }

    //executa a função de criar um novo prato
    async execute( {name, category, price, description, img, tags} ){
        
        //usa a função create da classe DishRepository
        const dishCreated = this.dishRepository.create({
            name, 
            category,  
            price, 
            description, 
            img, 
            tags
        })
        
        return dishCreated
    }
}

module.exports = DishCreateServices