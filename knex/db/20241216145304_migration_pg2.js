/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('new_table', tbl =>{
    tbl.increments('id');
    tbl.integer('roll');
    tbl.boolean('boolean');
  })

  .then(() => {
    return knex.schema.alterTable('user', tbl =>{
      tbl.dropColumn('age');
      tbl.string('lastname');
    });

  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('new_table')
};
