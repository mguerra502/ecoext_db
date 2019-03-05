
exports.up = function(knex, Promise) {
    return knex.schema.dropTable('account_transactions')
};

exports.down = function(knex, Promise) {
    return knex.schema
    .createTable('account_transactions', function (table) {
        table.engine("InnoDB")
        table.bigInteger('account_id').unsigned().notNullable();
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
};
