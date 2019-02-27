exports.seed = function (knex, Promise) {

  const insert = knex('account_transactions')
    .insert(knex.raw(`(account_id, transaction_id)
    SELECT a.account_id, t.transaction_id
    FROM account a, transaction t
  `))

  return knex('account_transactions').del()
    .then(() => {
      return insert;
    })

};