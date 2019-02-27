/**/
exports.seed = function (knex, Promise) {

  const insert = knex('account_notifications')
    .insert(knex.raw(`(account_id, notification_id)
    SELECT a.account_id, n.notification_id
    FROM account a, notification n
  `))
  
  return knex('account_notifications').del()
  .then(() => {
    return insert;
  })
  
};