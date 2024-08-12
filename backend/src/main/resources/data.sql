--ROLE TABLE
--INSERT IGNORE INTO role (name) VALUES ('USER');
--INSERT IGNORE INTO role (name) VALUES ('ADMIN');

--UNIQUE USERNAME AND EMAIL
ALTER TABLE user_account
ADD CONSTRAINT unique_username UNIQUE (username);

ALTER TABLE user_account
ADD CONSTRAINT unique_email UNIQUE (email);