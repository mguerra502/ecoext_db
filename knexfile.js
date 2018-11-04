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
    },
    afterInsert: table => `
            CREATE TRIGGER ${table}_AFTER_INSERT
            AFTER INSERT
                ON ${table}
            FOR EACH ROW
            BEGIN
                INSERT INTO user_login
                SET email = NULL,
                    account_id = NEW.${table}_id,
                    password = NULL;

                INSERT INTO purse
                    SET name = 'My first EcoWallet',
                    description = 'EcoWallet';
                    
                SET @purselastid = (SELECT purse_id FROM purse ORDER BY purse_id DESC LIMIT 1);
                
                -- IF @purselastid IS NULL THEN
                --    SET @purselastid = 0;
                -- END IF;
                -- SET @purselastid = @purselastid +1;
                INSERT INTO account_purses
                    SET purse_id = @purselastid,
                    account_id = NEW.${table}_id;
            END;
    `
}