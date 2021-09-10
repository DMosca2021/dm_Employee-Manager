DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE employee (
  id INT NOT NULL  -- AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  title_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  employment_status BOOLEAN NOT NULL
);

CREATE TABLE employee_title (
  -- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- first_name VARCHAR(40) NOT NULL,
  -- last_name VARCHAR(40) NOT NULL,
  -- title_name VARCHAR(100) NOT NULL,
  -- department_name VARCHAR(100) NOT NULL,
  -- salary INT NOT NULL,
  -- employment_status BOOLEAN NOT NULL
);

CREATE TABLE department (
  -- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- first_name VARCHAR(40) NOT NULL,
  -- last_name VARCHAR(40) NOT NULL,
  -- title_name VARCHAR(100) NOT NULL,
  -- department_name VARCHAR(100) NOT NULL,
  -- salary INT NOT NULL,
  -- employment_status BOOLEAN NOT NULL
);