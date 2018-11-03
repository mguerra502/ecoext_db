exports.up = function (knex, Promise) {
    return knex.schema.alterTable('account', function (table) {
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => {
        return knex.schema.alterTable('account_purses', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('account_transactions', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_transactions', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_phonenumber', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_login', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_notification', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('notification', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('purse', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('purse_transactions', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('account_notification', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_items', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_payment', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function (table) {
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('account', function (table) {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
    })
    .then(() => {
        return knex.schema.alterTable('account_purses', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('account_transactions', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_transactions', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_phonenumber', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('establishment_login', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_notification', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('notification', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('purse', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('purse_transactions', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('account_notification', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_items', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('transaction_payment', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
    .then(() => {
        return knex.schema.alterTable('user_login', function (table) {
            table.dropColumn('created_at');
            table.dropColumn('updated_at');
        })
    })
};