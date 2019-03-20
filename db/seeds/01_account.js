const accountData = require("../../data/account");

exports.seed = function(knex, Promise) {
  return knex('account').del()
  .then(function () {
    return knex('purse').del()
      // return knex("account").insert(accountData);
    });
};
