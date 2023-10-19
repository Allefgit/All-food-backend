exports.up = (knex) => knex.schema.createTable( "dishes", table =>{

    table.increments("id");
    table.text("img");
    table.text("name").notNullable();
    table.text("description").notNullable();
    table.text("category").notNullable();
    table.decimal("price").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated").default(knex.fn.now());
}) 


exports.down = knex => knex.schema.dropTable("dishes")