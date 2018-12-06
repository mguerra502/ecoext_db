const many_to_many = 'transaction_notifications';
const transaction = 'transaction';
const notification = 'notification';
const _ = require("lodash");

async function transactionNotification(transaction_array, notifications_array){
  let insert = []
  for(let i = 0; i < transaction_array.length; i++){
    let random_notification_id = notifications_array[_.random(0, notifications_array.length - 1)];
    _.pull(notifications_array, random_notification_id)
    insert.push({transaction_id: transaction_array[i], notification_id: random_notification_id})
  }
  var value = await Promise
  .resolve(insert)
  return insert;
}

exports.seed = function(knex, Promise) {
  let transactions_ids = [];
  let notifications_ids = [];

  return knex(many_to_many).del()
  .then(function () {
    return knex(transaction).pluck(transaction + '_id')
  })
  .then(function(tids){
    transactions_ids = tids
    return knex(notification).pluck(notification + '_id')
  })
  .then(function(nids){
    notifications_ids = nids;
    return transactionNotification(transactions_ids, notifications_ids)
  })
  .then(function(result){
    let insert = knex(many_to_many).insert(result);
    return insert;
  })
};