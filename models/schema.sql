DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;

CREATE DATABASE IF NOT EXISTS testdb;
CREATE USER IF NOT EXISTS 'travis'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
GRANT ALL PRIVILEGES ON testdb.* TO 'travis'@'localhost';

