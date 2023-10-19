
const path = require("path")

//configurações para a conexão com o banco de dados usando knex
module.exports = {
  development: {
    //tipo de banco utilizado
    client: 'sqlite3',

    //cria a conexão com o banco
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    
    //quando o banco é iniciado, ele executa automaticamente o comando que está descrito, que auxilia o delete em cascata 
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    
    //criação das migrates
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations") 
    },

    //é uma propriedade padrão do SQLITE
    useNullAsDefault: true
  }
};
