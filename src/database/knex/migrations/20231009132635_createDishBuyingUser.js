exports.up = (knex) => knex.schema.createTable( "dishesBuying", table =>{

    table.increments("id");
    table.integer("qtd").notNullable();
    
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");;

}) 


exports.down = knex => knex.schema.dropTable("dishesBuying")