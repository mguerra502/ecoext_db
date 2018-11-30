/**/
exports.seed = function (knex, Promise) {

  const insert = knex('account_transactions')
    .insert(knex.raw(`(account_id, transaction_id)
    SELECT a.account_id, t.transaction_id
    FROM account a, transaction t
    WHERE
    a.account_id NOT IN(SELECT account_id from account_transactions)
    AND
    t.transaction_id NOT IN(SELECT transaction_id from account_transactions);
  `))

  return knex('account_transactions').del()
  .then(() => {
    return insert;
  })
  
};