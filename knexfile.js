module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: process.env.ECOEXT_MYSQL_PORT,
      user: process.env.ECOEXT_DATABASE_USER,
      password: process.env.ECOEXT_DATABASE_ROOTPASSWORD,
      database: process.env.ECOEXT_DATABASE,
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  }
};