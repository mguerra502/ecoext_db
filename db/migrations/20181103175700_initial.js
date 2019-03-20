
exports.up = function(knex, Promise) {
    return knex.schema
    // ACCOUNT
    .createTable('account', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('account_id').primary();
        table.text('firstName', 20).notNullable();
        table.text('lastName', 20).notNullable();
        table.text('gender', 20).notNullable();
        table.dateTime('dob').notNullable();
        table.timestamps(false, true);
    })
    // ACCOUNT_PURSES
    .createTable('account_purses', function (table) {
        table.engine("InnoDB")
        table.bigInteger('account_id').unsigned().notNullable();
        table.bigInteger('purse_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // ACCOUNT_TRANSACTIONS
    .createTable('account_transactions', function (table) {
        table.engine("InnoDB")
        table.bigInteger('account_id').unsigned().notNullable();
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // ESTABLISHMENT
    .createTable('establishment', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('establishment_id').primary();
        table.text('name', 100);
        // TODO: Another table? establishment_adresses
        /**** establishment_adresses ****/
        table.text('address', 100);
        table.text('lat', 9);
        table.text('lon', 9);
        /*************** END ************/
        /**** establishment_adresses ****/
        table.timestamps(false, true);
    })
    // ESTABLISHMENT_TRANSACTIONS
    // TODO: Change INDEX transaction_id to UNIQUE on establishment_transaction
    .createTable('establishment_transactions', function (table) {
        table.engine("InnoDB")
        table.bigInteger('establishment_id').unsigned().notNullable();
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // ESTABLISHMENT_PHONE_NUMBERs
    .createTable('establishment_phone_numbers', function (table) {
        table.engine("InnoDB")
        table.bigInteger('establishment_id').unsigned().notNullable();
        table.bigInteger('phone_number_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // ESTABLISHMENT_LOGIN
    .createTable('establishment_login', function (table) {
        table.engine("InnoDB")
        table.bigInteger('establishment_id').unsigned().notNullable();
        table.text('username', 50).notNullable();
        table.text('password', 200).notNullable();
        table.timestamps(false, true);
    })
    // TRANSACTION_NOTIFICATION
    // TODO make it unique, one notification belongs to one transaction 
    // one transaction has many notifications
    .createTable('transaction_notifications', function (table) {
        table.engine("InnoDB")
        table.bigInteger('notification_id').unsigned().notNullable();
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // NOTIFICATION
    .createTable('notification', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('notification_id').primary();
        table.text('name').notNullable();
        //TODO: notification_type
        table.text('type').notNullable();
        table.text('description').notNullable();
        table.timestamps(false, true);
    })
    // PURSE
    .createTable('purse', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('purse_id').primary();
        table.text('name');
        table.text('description');
        table.timestamps(false, true);
    })
    // PURSE_TRANSACTIONS
    .createTable('purse_transactions', function (table) {
        table.engine("InnoDB")
        table.bigInteger('purse_id').unsigned().notNullable();
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // ACCOUNT_NOTIFICATIONS
    .createTable('account_notifications', function (table) {
        table.engine("InnoDB")
        table.bigInteger('account_id').unsigned().notNullable();
        table.bigInteger('notification_id').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // TRANSACTION
    .createTable('transaction', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('transaction_id').primary();
        // TODO: Another table? transaction_labels
        /**** transaction_labels ****/
        table.text('label');
        /****        END         ****/
        /**** transaction_labels ****/
        // TODO: revove table.dateTime('date');
        table.dateTime('date');
        table.text('description');
        table.timestamps(false, true);
    })
    // TRANSACTION_ITEMS
    .createTable('transaction_items', function (table) {
        table.engine("InnoDB")
        table.bigInteger('transaction_id').unsigned().notNullable();
        //whats the column product and why is it integer? where does it come from?
        // maybe we need a table product?
        table.string('product').notNullable();
        table.double('price').unsigned().notNullable();
        table.integer('quantity').unsigned().notNullable();
        table.double('tax').unsigned().notNullable();
        table.timestamps(false, true);
    })
    // PHONE_NUMBER
    .createTable('phone_number', function (table) {
        table.engine("InnoDB")
        table.bigIncrements('phone_number_id').unsigned().notNullable().primary();
        table.text('number');
        table.timestamps(false, true);
    })
    // TRANSACTION_PAYMENT
    .createTable('transaction_payment', function (table) {
        table.engine("InnoDB")
        table.bigInteger('transaction_id').unsigned().notNullable();
        table.text('type');
        table.double('paid');
        table.timestamps(false, true);
    })
    // USER_LOGIN
    .createTable('user_login', function (table) {
        table.engine("InnoDB")
        // table.bigIncrements('userlogin_id').primary();
        table.bigInteger('account_id').unsigned().notNullable();
        table.string('email', 50);
        table.string('password', 200);
        // table.timestamp('created_at').defaultTo(knex.fn.now());
        // table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    // return knex.schema.table('knex_migrations', function(table){
        
    // })
    return knex.schema.dropTable('account')
    .then(() => {
        return knex.schema.dropTable('account_purses')
    })
    .then(() => {
        return knex.schema.dropTable('account_transactions')
    })
    .then(() => {
        return knex.schema.dropTable('establishment')
    })
    .then(() => {
        return knex.schema.dropTable('establishment_transactions')
    })
    .then(() => {
        return knex.schema.dropTable('establishment_phone_numbers')
    })
    .then(() => {
        return knex.schema.dropTable('establishment_login')
    })
    .then(() => {
        return knex.schema.dropTable('transaction_notifications')
    })
    .then(() => {
        return knex.schema.dropTable('notification')
    })
    .then(() => {
        return knex.schema.dropTable('purse')
    })
    .then(() => {
        return knex.schema.dropTable('purse_transactions')
    })
    .then(() => {
        return knex.schema.dropTable('account_notifications')
    })
    .then(() => {
        return knex.schema.dropTable('transaction')
    })
    .then(() => {
        return knex.schema.dropTable('phone_number')
    })
    .then(() => {
        return knex.schema.dropTable('transaction_items')
    })
    .then(() => {
        return knex.schema.dropTable('transaction_payment')
    })
    .then(() => {
        return knex.schema.dropTable('user_login')
    })
};
