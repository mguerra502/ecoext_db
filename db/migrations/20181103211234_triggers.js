const { after_insert_on_account } = require('../../data/trigger')

exports.up = function(knex, Promise) {
  return knex.raw(after_insert_on_account);
};

exports.down = function(knex, Promise) {
  return knex.raw("DROP TRIGGER IF EXISTS account_AFTER_INSERT;")
};
