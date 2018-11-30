const phoneNumberData = require("../../data/phonenumbers");


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phonenumber').del()
  .then(function () {
    return knex("phonenumber").insert(phoneNumberData)
      .then((result) => {
        console.log(result)
      })
  });
};
