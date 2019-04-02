
exports.up = function(knex, Promise) {
   return knex.schema
    // ACCOUNT
    .createTable('keys', function (table) {
        table.engine("InnoDB")
        table.string('id', 128).primary().unique().notNullable();
        table.string('key_aes', 64).notNullable();
        table.string('key_iv', 32).notNullable();
        table.string('ipv4', 15).notNullable();
        table.specificType('port', 'smallint').notNullable();
        table.timestamps(false, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('keys');
};
