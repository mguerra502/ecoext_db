module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'ecoext_versioned'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds:{
            directory: __dirname + '/db/seeds'
        },
    },
    production: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'ecoext_versioned'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds:{
            directory: __dirname + '/db/seeds'
        },
    }
}