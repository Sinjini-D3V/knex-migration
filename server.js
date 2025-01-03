var knex = require(knex)({
  client: 'pg',
  version: '8.13.1',
  connection: {
    host : '127.0.0.1',
    user : 'admin',
    password : 'null',
    database: 'my_db'
  }
});
