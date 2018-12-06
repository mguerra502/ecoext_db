const notificationData = require("../../data/notification");

exports.seed = function (knex, Promise) {
  return knex('notification').del()
    .then(function () {
      return knex("notification").insert(notificationData);
    });
};
