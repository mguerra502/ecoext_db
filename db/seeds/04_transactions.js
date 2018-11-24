const transactionData = require("../../data/transaction");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transaction').del()
    .then(function () {
      return knex("transaction").insert(transactionData);
    });
};
