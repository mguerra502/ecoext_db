const accountsData = require("../../data/account");
const pursesData = require("../../data/purse");

exports.seed = function(knex, Promise) {
  
   return knex("account").del()
   .then(() => {
     return knex("purse").del();
   })
   .then(() => {
     return knex("account").insert(accountsData);
   })
   .then(() => {
      return knex("purse").insert(pursesData)
      .then(() =>{
        let accountPurses_Promise = [];

        pursesData.forEach((purse) => {
          accountPurses_Promise.push(createPurse(knex, purse));
        });
        return Promise.all(accountPurses_Promise);

      })
    })
    
  
};



// const createPurse = (knex, purse) => {
//   return knex("purse")
//   .where("name", purse.name)
//   .whereNotIn("purse_id", knex.select('purse_id').from('account_purses'))
//   .first()
  
//   .then(
//     (purseObject) => {
//         return knex("account")
//           .select(knex.raw('count(account.account_id) as count, account.account_id'))
//           .having('count', '<=', 1)
//           .leftJoin('account_purses', 'account.account_id', 'account_purses.account_id')
//           .groupBy('account.account_id')
//           .first()
//           .then((accountObject) => {
//             console.log(accountObject);
//             console.log("purse_id:", purseObject.purse_id, "account_id:", accountObject.account_id);
//             return knex("account_purses").insert({
//               account_id: accountObject.account_id,
//               purse_id: purseObject.purse_id
//             });
//           })
//     });
// };
const createPurse = (knex, purse) => {
  

  return knex("account")
    .select(knex.raw('count(account.account_id) as count, account.account_id'))
    .having('count', '<=', 1)
    .leftJoin('account_purses', 'account.account_id', 'account_purses.account_id')
    .groupBy('account.account_id')
    .first()
  
  .then((accountObject) => {
    return knex("purse")
    .where("name", purse.name)
    .whereNotIn("purse_id", knex.select('purse_id').from('account_purses'))
    .first()
    .then((purseObject) => {
      console.log(accountObject.account_id,purseObject.purse_id)
      console.log()
      return knex("account_purses").insert({
        account_id: accountObject.account_id,
        purse_id: purseObject.purse_id
      });
    })
    // TODO: one purse to one account
    return knex("account")
      .select(knex.raw('count(account.account_id) as count, account.account_id'))
      .having('count', '<=', 1)
      .leftJoin('account_purses', 'account.account_id', 'account_purses.account_id')
      .groupBy('account.account_id')
      .first()
      .then((accountObject) => {
        console.log(accountObject);
        console.log("purse_id:", purseObject.purse_id, "account_id:", accountObject.account_id);
        return knex("account_purses").insert({
          account_id: accountObject.account_id,
          purse_id: purseObject.purse_id
        });
      })
    });
};