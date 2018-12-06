const faker = require("faker");

exports.seed = function(knex, Promise) {
  return knex('payment_type').del()
    .then(function () {
      return knex('payment_type').insert([
        {type: "Money"},
        {type: "Credit Card"},
        {type: "Debit Card"},
        {type: "Cheque"},
        {type: "Money Transfer"},
        {type: "Contactless Card"},
        {type: "Contactless Smart Device"},
        {type: "Mobile Payments"},
      ]);
    });
};
