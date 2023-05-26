CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES
  ('user1', 'password1'),
  ('user2', 'password2'),
  ('user3', 'password3');
