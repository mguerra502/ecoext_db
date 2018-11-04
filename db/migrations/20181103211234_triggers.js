const { afterInsert } = require('../../knexfile')

exports.up = function(knex, Promise) {
  return knex.raw(afterInsert('account'));
};

exports.down = function(knex, Promise) {
  return knex.raw("DROP TRIGGER IF EXISTS account_AFTER_INSERT;")
};
