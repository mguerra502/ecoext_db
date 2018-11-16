const establishmentData = require("../../data/establishment");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('establishment').del()
    .then(function () {
      return knex("establishment").insert(establishmentData);
    });
};
