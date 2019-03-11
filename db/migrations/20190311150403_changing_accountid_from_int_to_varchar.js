
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('account', function (table) {
        table.dropColumn("account_id");
        
    }).then(() => {
        return table.text('account_id').primary();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('account', function (table) {
        table.dropColumn("account_id");
        table.bigIncrements('account_id').primary();
    })
   
};
