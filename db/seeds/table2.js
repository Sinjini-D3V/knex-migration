/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table2').truncate()
  await knex('table2').insert([
    {id: 1, place: 'place1', name: 'name1'},
    {id: 2, place: 'place2', name: 'name2'},
    {id: 3, place: 'place3', name: 'name3'}
  ]);
};
