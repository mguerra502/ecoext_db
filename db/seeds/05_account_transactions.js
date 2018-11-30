/**/
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('account_transactions').del()
    .then(function () {
      knex.select().from('transaction')
        .whereNotIn('transaction_id', knex.select("transaction_id").from('account_transactions'))
        .then(function (result) {
          result.forEach(transaction => {
            const getAccount =
              knex("account")
              .select("*")
              .whereNotIn('account_id', knex.select("account_id").from('account_transactions'))
              .then(function (account_result) {
                account_result.forEach(account => {

                  return knex('account_transactions').insert({
                    account_id: account.account_id,
                    transaction_id: transaction.transaction_id
                  }).then(function (retprn) {
                    console.log(retprn)
                  })
                })
              })
          });
        })
    });
};
/**/