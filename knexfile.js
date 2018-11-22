module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: process.env.ECOEXT_MARIADB_PORT,
            user: 'root',
            password: process.env.ECOEXT_MARIADB_ROOTPASSWORD,
            database: 'ecoext'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds:{
            directory: __dirname + '/db/seeds'
        },
    }
}