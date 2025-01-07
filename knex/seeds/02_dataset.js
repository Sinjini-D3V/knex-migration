/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('new_table').truncate()
  await knex('new_table').insert([
    {id: 1, roll: '1', boolean: 'True'},
    {id: 2, roll: '2', boolean: 'False'},
    {id: 3, roll: '3', boolean: 'True'}
  ]);
};
