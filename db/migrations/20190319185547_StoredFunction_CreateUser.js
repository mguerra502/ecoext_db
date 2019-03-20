const {
  CreateUser,
  DropCreateUser
} = require('../../triggers/procedures')

exports.up = function (knex, Promise) {
  return knex.raw(CreateUser)
};

exports.down = function (knex, Promise) {
  return knex.raw(DropCreateUser)
};
