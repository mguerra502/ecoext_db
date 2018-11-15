const accountData = require("../../data/account");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('account').del()
    .then(function () {
      return knex("account").insert(accountData);
    });
};
