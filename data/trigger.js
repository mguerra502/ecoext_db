module.exports = [
    {
        "after_insert_on_account": () => `
        CREATE TRIGGER account_AFTER_INSERT
        AFTER INSERT
            ON account
        FOR EACH ROW
        BEGIN
            INSERT INTO user_login
            SET email = NULL,
                account_id = NEW.account_id,
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
                account_id = NEW.account_id;
        END;
        `
    }
]