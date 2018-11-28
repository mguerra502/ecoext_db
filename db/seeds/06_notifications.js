const notificationData = require("../../data/notification");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('notification').del()
    .then(function () {
      return knex("notification").insert(notificationData);
    });
};
