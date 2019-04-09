const {
    CreatePurse,
    DropCreatePurse
  } = require('../../triggers/procedures')
  
  exports.up = function (knex, Promise) {
    return knex.raw(CreatePurse)
  };
  
  exports.down = function (knex, Promise) {
    return knex.raw(DropCreatePurse)
  };
  