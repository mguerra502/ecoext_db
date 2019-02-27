/**/
exports.seed = function (knex, Promise) {

  const insert = knex('establishment_transactions')
    .insert(knex.raw(`(establishment_id, transaction_id)
    SELECT e.establishment_id, t.transaction_id
    FROM establishment e, transaction t
  `))

  return knex('establishment_transactions').del()
    .then(() => {
      return insert;
    })

};