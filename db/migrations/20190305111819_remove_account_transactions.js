
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
    .then(() => {
        return knex.schema.alterTable('account_transactions', function (table) {
            table.primary(['account_id', 'transaction_id']);
            table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
            table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
        })
    })
};
