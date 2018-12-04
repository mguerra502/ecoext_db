const faker = require('faker');
const superfood = require('superfood');
const _ = require('lodash');

async function getProducts(tids){
  let insert = []
  
  for(let i = 0; i < tids.length; i++){
    let rand = faker.random.number({min: 1, max: 5});
    for(let j = 0; j < rand; j++){
      insert.push({transaction_id: tids[i], product: superfood.random(), price: faker.finance.amount(0.01,999.999,2), quantity: faker.random.number({min: 1, max: 8}), tax:faker.finance.amount(1,25, 2)})
    }
  }
  var value = await Promise
  .resolve(insert)
  return insert;
}

exports.seed = function (knex, Promise) {
  
  let transactions_id = [];
  const transaction_items = [];
  let insert = [];
  
  
  return knex('transaction_items').del()
  .then(() => {
    return knex('transaction').pluck('transaction_id')
    
  })
  .then((tids) => {
    return getProducts(tids)
  })
  .then((result) => {
    let insert = knex("transaction_items").insert(result);
    return insert;
  })
  .then((result2) => {
    
  })
  
};