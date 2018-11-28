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
    },
    local: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'gabriel',
            password: 'Quemsabecala16!',
            database: 'ecoext'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        },
    }
}