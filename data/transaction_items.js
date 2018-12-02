let knex = require('faker');
let faker = require('faker');
let superfood = require('superfood');



// {product: superfood.random(), price: faker.finance.amount(0.01,999.999,2), quantity: faker.random.number({min: 1, max: 99}), tax:faker.finance.amount(1,25, 2)}

module.exports = {

  data: function () {
    let transactions_id = [];
    // TODO: It should return all the ids as an array
    // TODO: then
    // TODO: seed 12 has got to call it as promise
    
    return knex('transaction').pluck('transaction_id').then((tids) => {
      transactions_id = tids;
    }).then(function () {
      console.log(transactions_id);
      return ["fodase"]
    })
  }
  
};