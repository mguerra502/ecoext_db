const transactionItesmData = require("../../data/transaction_items");
const faker = require('faker');
const _ = require('lodash');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries

  let transactions_id = [];
  const transaction_items = [];


  return knex('transaction_items').del()
  .then(() => {
    return knex('transaction').pluck('transaction_id').then((tids) => {
      transactions_id = tids;
    })
  })
  .then(() => {
    
    const loopCount = transactions_id.length;

    for (let index = 0; index < loopCount; index++) {

      console.log(transactionItesmData.getRArray());
      return true

      transactionItesmData.forEach(element => {
        let rtid = faker.random.arrayElement(transactions_id)
        
        _.remove(transactions_id, function (n) {
          return n == rtid;
        });
        
        element.transaction_id = rtid;
        transaction_items.push(element)
      }); 
    }

    return knex("transaction_items").insert(transaction_items);
  }).catch(function (err) {
    // console.log(transactions_id)
    // console.log(transaction_items)
    // console.error(err);
  });

  // .then(function () {
  //   return knex("transaction_items").insert(transactionItesmData);
  // });
};
