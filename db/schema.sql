DROP DATABASE IF EXISTS workers_db;
CREATE DATABASE workers_db;

USE workers_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE title (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title_id INT,
  manager_id INT
);