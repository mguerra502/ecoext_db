
exports.up = function(knex, Promise) {
    return knex.schema
    .alterTable('account', function (table) {
        // table.unique("account_id").primary();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .alterTable('account', function (table) {    
        // table.dropPrimary("account_id");
        // table.dropUnique(["phone_number_id"]);
    })
};
