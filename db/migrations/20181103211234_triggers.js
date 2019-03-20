const {
  after_insert_on_account,
  after_insert_on_establishment
} = require('../../triggers/triggers')

exports.up = function(knex, Promise) {
  return knex.raw(after_insert_on_account)
  .then(()=>{
    return knex.raw(after_insert_on_establishment);
  })
};

exports.down = function(knex, Promise) {
  return knex.raw("DROP TRIGGER IF EXISTS account_AFTER_INSERT;")
  .then(()=>{
    return knex.raw("DROP TRIGGER IF EXISTS establishment_AFTER_INSERT;")
  })
};
