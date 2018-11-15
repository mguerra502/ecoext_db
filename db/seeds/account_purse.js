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
      knex("purse").insert(pursesData)
      .then(() =>{
        let accountPurses_Promise = [];

        pursesData.forEach((purse) => {
          accountPurses_Promise.push(createPurse(knex, purse));
        });
        return Promise.all(accountPurses_Promise);

      })
    })
    
  
};



const createPurse = (knex, purse) => {
  // select * from purse WHERE purse_id NOT IN (SELECT purse_id FROM account_purses);
  let pursesQuery = knex("purse").where("name", purse.name)
    .whereNotIn("purse_id", knex.select('purse_id').from('account_purses'))
    .first();
  return pursesQuery
  .then(
    (purseObject) => {
      let accountQuery = knex("account")
      .select('account_id')
      .whereNotIn("account_id", knex.select('account_id').from('account_purses').where('purse_id', purseObject.purse_id))
      .first()

      accountQuery.then((accountObject) =>{
        console.log(purseObject.purse_id);
        console.log(accountObject);
        
        let insertQuery = knex("account_purses").insert({
          account_id: accountObject.account_id,
          purse_id: purseObject.purse_id
        });
        return insertQuery;
      })
      
      
    }
  ).then((accountObject) => {
    // console.log(purseObject);
    // console.log(accountObject)
    // console.log("\t"+accountObject.account_id)
  });

  return knex("purse").where("name", purse.name)
  .first()
  .then((purse) => {
    // console.log(purse.purse_id);
    
    const subqueryOne = knex
      .select('*')
      .from('account_purses')

    let account_id_available = [];
      
    subqueryOne
    .then((accountObject) =>{
      console.log("accountObject: " + accountObject)

      accountObject.forEach((account_id_object)=>{
        account_id_available.push(account_id_object.account_id);
      })

      let getAccount =
        knex.select('*')  
        .from('account')
        .whereNotIn("account_id", account_id_available)
        .first()
        // console.log(getAccount.toString());
        getAccount
          // .first()
          .then((account) => {


            // console.log(purse.name);
            // console.log(account);
            // console.log("\t" + account.firstName + " " + account.lastName);
            // console.log(account.account_id + " || " + purseRecord.purse_id);

            /*
            return knex("account_purses").insert({
              account_id: account.account_id,
              purse_id: purseRecord.purse_id
            });
            /** */
          })
        // console.log(account_id_available);
        console.log(getAccount.toString());
    })
  })
};