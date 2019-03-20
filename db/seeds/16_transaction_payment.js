const many_to_many = 'transaction_payment';
const transaction = 'transaction';
const payment_type = 'payment_type';
const _ = require("lodash");

async function transactionPayment(transaction_array, payment_type_array) {
  let insert = []
  for (let i = 0; i < transaction_array.length; i++) {
    let random_payment_type_id = payment_type_array[_.random(0, payment_type_array.length - 1)];
    let paid = _.random(0.1, 100, true);
    // _.pull(payment_type_array, random_payment_type_id)
    insert.push({
      transaction_id: transaction_array[i],
      payment_type_id: random_payment_type_id,
      paid: paid
    })
  }
  var value = await Promise.resolve(insert)
  // return value;
  return insert;
}

exports.seed = function (knex, Promise) {
  let transactions_ids = [];
  let payment_type_ids = [];

  return knex(many_to_many).del()
    .then(function () {
      return knex(transaction).pluck(transaction + '_id')
    })
    .then(function (tids) {
      transactions_ids = tids
      return knex(payment_type).pluck(payment_type + '_id')
    })
    .then(function (nids) {
      payment_type_ids = nids;
      return transactionPayment(transactions_ids, payment_type_ids);
    })
    .then(function (result) {
      let insert = knex(many_to_many).insert(result);
      return insert;
    })
};

