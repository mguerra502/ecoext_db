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
    DropCreateUser: `DROP procedure IF EXISTS CreateUser;`
}