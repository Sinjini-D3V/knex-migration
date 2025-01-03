/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', tbl =>{
    tbl.increments('id');
    tbl.string('name');
    tbl.integer('age');
  })

  .then(() => {
    return knex.schema.createTable('table2', tbl =>{
      tbl.increments('id');
      tbl.string('place');
      tbl.string('name');
    });

  });

};

/*
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('table2')
  .then(() => {
    return knex.schema.dropTableIfExists('user');
  });
};

