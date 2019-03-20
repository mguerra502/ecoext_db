
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('user_login', function (table) {
        // table.string('user_id', 32).notNullable().unique()
        // TODO user_id must be notNullable
        table.string('user_id', 32).unique()
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function(table){
            return table.dropForeign('account_id')
        })
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function (table) {
            table.dropPrimary('account_id');
        });
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function (table) {
            table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
        })
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function (table) {
            // table.primary(['account_id', 'user_id']);
            table.primary(['account_id', 'user_id']);
        });
    });
};

exports.down = function(knex, Promise) {
    
    return knex.schema.alterTable('user_login', function (table) {
        // table.dropPrimary('user_id');
        table.dropColumn('user_id');
    });
    // .then(() => {
    //     return knex.schema.alterTable('user_login', function (table) {
    //         return table.dropForeign('account_id')
    //     })
    // })
    // .then(() => {
    //     return knex.schema.alterTable('user_login', function (table) {
    //         table.dropPrimary('account_id');
    //     });
    // })
    // .then(() => {
    //     return knex.schema.alterTable('user_login', function (table) {
    //         table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
    //     })
    // })
    // .then(() => {
    //     return knex.schema.alterTable('user_login', function (table) {
    //         table.primary(['account_id', 'user_id']);
    //     });
    // });
};