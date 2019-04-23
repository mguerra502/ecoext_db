module.exports = {
    after_insert_on_account:`
        CREATE TRIGGER account_AFTER_INSERT
        AFTER INSERT
            ON account
        FOR EACH ROW
        BEGIN
            -- INSERT INTO user_login
            -- SET email = NULL,
            --    account_id = NEW.account_id,
            --    password = NULL;

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
                account_id = NEW.account_id;
        END;
    `,
    after_insert_on_establishment:`
        CREATE TRIGGER establishment_AFTER_INSERT
        AFTER INSERT
            ON establishment
        FOR EACH ROW
        BEGIN
            INSERT INTO establishment_login
                SET
                establishment_id = NEW.establishment_id,
                username = LOWER(REPLACE(NEW.name, ' ', ''));
                -- password = SHA(CONCAT('EcoExT_', LOWER(REPLACE(NEW.name, ' ', ''))));
        END;
    `,
    after_insert_on_table: table => `
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
    `,
}