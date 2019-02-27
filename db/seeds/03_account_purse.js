const faker = require('faker');
exports.seed = function (knex, Promise) {
  
  let accounts_id = [];
  let purses_id = [];
  
  return knex("account").del()
  .then(() => {
    return knex("purse").del();
  })
  .then(() => {
    
    let accounts = [];
    
    for (let index = 0; index < 10; index++) {
      accounts.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: "m",
        dob: faker.date.recent(),
      });
    }
    
    return knex("account").insert(accounts);
  })
  .then(() => {
    return knex('account').pluck('account_id').then((aids) => {
      accounts_id = aids;
    })
  })
  .then(() => {
    let purses = [];
    
    for (let index = 0; index < 10; index++) {
      purses.push({
        name: faker.finance.accountName(),
        description: faker.finance.iban(),
      });
    }
    return knex("purse").insert(purses);
  })
  .then(() => {
    return knex('purse').pluck('purse_id').then((pids) => {
      purses_id = pids;
    })
  })
  .then(() => {
    const account_purses = [];
    for (let index = 0; index < 10; index++) {
      account_purses.push({
        account_id: faker.random.arrayElement(accounts_id),
        purse_id: faker.random.arrayElement(purses_id)
      })
    }
    return knex("account_purses").insert(account_purses);
  });
};