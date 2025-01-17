// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = { 
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'admin',
      password: 'null',
      database: 'my_db',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
  },
};
