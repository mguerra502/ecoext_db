const {
  ECOEXT_MYSQL_PORT,
  ECOEXT_MYSQL_HOST,
  ECOEXT_DATABASE,
  ECOEXT_DATABASE_USER,
  ECOEXT_DATABASE_ROOTPASSWORD
} = require("./utils/config")

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: ECOEXT_MYSQL_HOST,
      port: ECOEXT_MYSQL_PORT,
      user: ECOEXT_DATABASE_USER,
      password: ECOEXT_DATABASE_ROOTPASSWORD,
      database: ECOEXT_DATABASE,
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  local: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "gabriel",
      password: "eueeu99",
      database: "ecoext",
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  }
};

// TODO: change gender to char(1)

// account_notification
  // TODO: account_notification notification_id must unique
  // TODO: account_notification index account_id, notification_id

// establishment
  // TODO: establishment review trigger

// establishment_login
  // TODO: establishment_login Fix password with bcrypt

// payment_type
  // TODO: payment_type

// phone_number
  // TODO: phone_number

// purse
  // TODO: purse

// purse_transactions
  // TODO: purse_transactions

// transaction
  // TODO: transaction

// transaction_items
  // TODO: transaction_items

// transaction_notifications
  // TODO: transaction_notifications

// transaction_payment
  // TODO: transaction_payment

// user_login
  // TODO: user_login
