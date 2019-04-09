const {
    CreateNotification,
    DropCreateNotification
  } = require('../../triggers/procedures')
  
  exports.up = function (knex, Promise) {
    return knex.raw(CreateNotification)
  };
  
  exports.down = function (knex, Promise) {
    return knex.raw(DropCreateNotification)
  };
  