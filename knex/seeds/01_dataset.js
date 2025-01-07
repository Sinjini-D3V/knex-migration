/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').truncate();

  // Inserts seed entries
  await knex('user').insert([
    {id: 1, name: 'john', age: 34},
    {id: 2, name: 'jacob', age: 45},
    {id: 3, name: 'james', age: 23},
    {id: 4, name: 'jane', age: 29},
    {id: 5, name: 'michael', age: 38},
    {id: 6, name: 'lucas', age: 27},
    {id: 7, name: 'emily', age: 32},
    {id: 8, name: 'sophia', age: 40},
    {id: 9, name: 'david', age: 51},
    {id: 10, name: 'olivia', age: 25},
    {id: 11, name: 'liam', age: 28},
    {id: 12, name: 'ella', age: 33},
    {id: 13, name: 'matthew', age: 30},
    {id: 14, name: 'ava', age: 22},
    {id: 15, name: 'joseph', age: 42},
    {id: 16, name: 'lucy', age: 37},
    {id: 17, name: 'henry', age: 24},
    {id: 18, name: 'isabella', age: 26},
    {id: 19, name: 'noah', age: 39},
    {id: 20, name: 'grace', age: 41},
    {id: 21, name: 'ella', age: 23},
    {id: 22, name: 'charlotte', age: 30},
    {id: 23, name: 'dylan', age: 35},
    {id: 24, name: 'sarah', age: 31},
    {id: 25, name: 'harry', age: 44},
    {id: 26, name: 'mia', age: 19},
    {id: 27, name: 'robert', age: 56},
    {id: 28, name: 'amelia', age: 27},
    {id: 29, name: 'alexander', age: 32},
    {id: 30, name: 'ella', age: 33},
    {id: 31, name: 'jack', age: 25},
    {id: 32, name: 'hannah', age: 40},
    {id: 33, name: 'samuel', age: 29},
    {id: 34, name: 'abigail', age: 35},
    {id: 35, name: 'jackson', age: 27},
    {id: 36, name: 'lucy', age: 33},
    {id: 37, name: 'ella', age: 29},
    {id: 38, name: 'liam', age: 38},
    {id: 39, name: 'emily', age: 24},
    {id: 40, name: 'benjamin', age: 43},
    {id: 41, name: 'ella', age: 32},
    {id: 42, name: 'ava', age: 28},
    {id: 43, name: 'grace', age: 31},
    {id: 44, name: 'jacob', age: 25},
    {id: 45, name: 'lucas', age: 40},
    {id: 46, name: 'harry', age: 29},
    {id: 47, name: 'mia', age: 24},
    {id: 48, name: 'olivia', age: 30},
    {id: 49, name: 'nathan', age: 39},
    {id: 50, name: 'victoria', age: 45}
  ]);
};

