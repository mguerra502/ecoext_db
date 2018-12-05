const many_to_many = 'purse_transactions';
const purse = 'purse';
const transaction = 'transaction';
const _ = require("lodash");

async function pursetransaction(purse_array, transactions_array) {

  let insert = []

  for (let i = 0; i < purse_array.length; i++) {
    let random_transaction_id = transactions_array[_.random(0, transactions_array.length - 1)];
    _.pull(transactions_array, random_transaction_id)
    insert.push({
      purse_id: purse_array[i],
      transaction_id: random_transaction_id
    })
  }

  var value = await Promise
    .resolve(insert)
  return insert;
}

exports.seed = function (knex, Promise) {
  let purses_ids = [];
  let transactions_ids = [];

  return knex(many_to_many).del()
    .then(function () {
      return knex(purse).pluck(purse + '_id')
    })
    .then(function (tids) {
      purses_ids = tids
      return knex(transaction).pluck(transaction + '_id')
    })
    .then(function (nids) {
      transactions_ids = nids;
      return pursetransaction(purses_ids, transactions_ids)
    })
    .then(function (result) {
      let insert = knex(many_to_many).insert(result);
      return insert;
    })
};