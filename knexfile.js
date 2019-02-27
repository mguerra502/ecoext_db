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

// module.exports = {
//   development: {
//     client: "mysql2",
//     connection: {
//       host: "127.0.0.1",
//       port: process.env.ECOEXT_MYSQL_PORT,
//       user: process.env.ECOEXT_DATABASE_USER,
//       password: process.env.ECOEXT_DATABASE_ROOTPASSWORD,
//       database: process.env.ECOEXT_DATABASE,
//     },
//     migrations: {
//       directory: __dirname + "/db/migrations"
//     },
//     seeds: {
//       directory: __dirname + "/db/seeds"
//     }
//   },
//   local: {
//     client: "mysql2",
//     connection: {
//       host: "127.0.0.1",
//       port: 3307,
//       user: "gabriel",
//       password: "eueeu99",
//       database: "ecoext",
//     },
//     migrations: {
//       directory: __dirname + "/db/migrations"
//     },
//     seeds: {
//       directory: __dirname + "/db/seeds"
//     }
//   }
// };