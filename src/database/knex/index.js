const config = require("../../../knexfile")
const knex = require("knex")

//inicia a conexão com banco de dados
const connection = knex(config.development)

//exporta a conexão
module.exports = connection;