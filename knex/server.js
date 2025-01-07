var knex = require('knex')({
  client: 'pg',
  version: '8.13.1',
  connection: {
    host : 'postgres_container',
    user : 'admin',
    password : '',
    database: 'my_db'
  }
});

/*knex.migrate.up('20241213090349_migration_pg.js')
  .then(() => {
    console.log('Migration applied');
    knex.destroy();
  })
  .catch(err => {
    console.error('Migration failed', err);
    knex.destroy();
  });
*/
const retryConnection = async () => {
  let retries = 5;
  while (retries) {
    try {
      await knex.raw('select 1+1 as result');
      console.log('Database connection successful');
      // Run the migration once the connection is successful
      await knex.migrate.up('20241213090349_migration_pg.js');
      console.log('Migration applied');
      await knex.seed.run({ specific: '01_dataset.js' });
      await knex.seed.run({ specific: 'table2.js' });
      knex.destroy();
      console.log('Seeding successful');

      return;
    } catch (err) {
      retries--;
      console.error('Failed to connect to database. Retries left:', retries);
      await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds
    }
  }
  console.error('Unable to connect to the database after several attempts.');
};

retryConnection();
