
exports.up = function(knex, Promise) {
   return knex.schema
    // ACCOUNT
    .createTable('keys', function (table) {
        table.engine("InnoDB")
        table.bigIncrements().primary().unique();
        table.binary('key_aes', 32);
        table.binary('key_iv', 16);
        table.string('ip_before', 15);
        table.specificType('port', 'smallint');
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('keys');
};
