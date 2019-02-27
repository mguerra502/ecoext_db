const establishmentData = require("../../data/establishment");

exports.seed = function (knex, Promise) {
  return knex('establishment').del()
    .then(function () {
      return knex("establishment").insert(establishmentData);
    });
};
