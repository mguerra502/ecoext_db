module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      // port: process.env.ECOEXT_MARIADB_PORT,
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
  },
  local: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "gabriel",
      password: "Quemsabecala16!",
      database: "ecoext"
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  mysql: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3305,
      user: "root",
      password: process.env.ECOEXT_DATABASE_ROOTPASSWORD,
      database: "ecoext"
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  }
};