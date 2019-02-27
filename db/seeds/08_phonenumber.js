const phoneNumberData = require("../../data/phonenumbers");

exports.seed = function (knex, Promise) {
  return knex('phone_number').del()
  .then(function () {
    return knex("phone_number").insert(phoneNumberData)
  });
};
