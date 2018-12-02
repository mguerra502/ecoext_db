/**/
exports.seed = function (knex, Promise) {

  const insert = knex('purse_transactions')
    .insert(knex.raw(`(purse_id, transaction_id)
      SELECT p.purse_id, t.transaction_id
      FROM purse p, transaction t
  `))

  console.log(insert.toString())

  return knex('purse_transactions').del()
    .then(() => {
      return insert;
    })

};