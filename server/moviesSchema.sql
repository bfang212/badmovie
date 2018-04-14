DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT UNIQUE KEY,
  original_title varchar(50) NOT NULL,
  release_date DATE NOT NULL,
  overview varchar (255),
  vote_average FLOAT NOT NULL,
  poster_path varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
