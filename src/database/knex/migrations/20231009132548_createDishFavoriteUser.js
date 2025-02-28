exports.up = (knex) => knex.schema.createTable( "dishesFavorites", table =>{

    table.increments("id");
    
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");;
}) 


exports.down = knex => knex.schema.dropTable("dishesFavorites")