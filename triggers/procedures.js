module.exports = {
    CreateUser: `
        CREATE PROCEDURE CreateUser(
            IN INfirstame varchar(32),
            IN INlastame varchar(32),
            IN INgender char,
            IN INdob DATETIME,
            IN INuid VARCHAR(28),
            IN INemail VARCHAR(320),
            IN INpassword VARCHAR(64))
        BEGIN
            DECLARE uuid varchar(28);
            DECLARE accountid bigint;
            
            SELECT user_id FROM user_login WHERE user_id = INuid INTO uuid;
            
            IF LENGTH(INuid) != 28 THEN set uuid = "inform a valid user id";
            ELSE
                IF uuid IS NOT NULL THEN set uuid = "already registered";
                ELSE
                    INSERT INTO account(firstName, lastName, gender, dob) VALUES (INfirstame, INlastame, INgender, INdob);
                    
                    SELECT LAST_INSERT_ID() INTO accountid;
                    
                    INSERT INTO user_login (account_id, email, password, user_id) VALUES (accountid, INemail, INpassword, INuid);
                    
                    SELECT user_id FROM ecoext.user_login ORDER BY created_at DESC LIMIT 1 INTO uuid;
                
                END IF;
            END IF ;

            SELECT uuid;
        END
    `,
    DropCreateUser: `DROP procedure IF EXISTS CreateUser;`,
    CreatePurse: `
        CREATE PROCEDURE CreatePurse (
            IN pursename text,
            IN purseDescription text,
            IN account_id int
        )
        BEGIN
            DECLARE id varchar(28);
            DECLARE purse_id bigint;
            
            -- SELECT user_id FROM user_login WHERE user_id = INuid INTO uuid;
            
            -- IF LENGTH(INuid) != 28 THEN set uuid = "inform a valid user id";
            -- ELSE
                -- IF uuid IS NOT NULL THEN set uuid = "already registered";
                -- ELSE
                    INSERT INTO purse(name, description) VALUES (pursename, purseDescription);
                    
                    SELECT LAST_INSERT_ID() INTO purse_id;
                    
                    INSERT INTO account_purses (account_id, purse_id) VALUES (account_id, purse_id);
                    
                    SELECT purse_id FROM ecoext.user_login ORDER BY created_at DESC LIMIT 1 INTO id;
                
                -- END IF;
            -- END IF ;
        
            SELECT id;
        END
    `,
    DropCreatePurse: `DROP procedure IF EXISTS CreatePurse;`,
    CreateNotification: `
        CREATE PROCEDURE CreateNotification(
            IN NotificationName text,
            IN NotificationType text,
            IN NotificationDescription text,
            IN account_id int
        )
        BEGIN
            DECLARE id bigint;
            DECLARE notification_id bigint;
            
            INSERT INTO notification(name, type, description) VALUES (NotificationName, NotificationType, NotificationDescription);
            
            SELECT LAST_INSERT_ID() INTO notification_id;
            
            INSERT INTO account_notifications (account_id, notification_id) VALUES (account_id, notification_id);
            
            SELECT notification_id FROM ecoext.notification ORDER BY created_at DESC LIMIT 1 INTO id;
        
            SELECT id;
        END
    `,
    DropCreateNotification: `DROP procedure IF EXISTS CreateNotification;`,
}