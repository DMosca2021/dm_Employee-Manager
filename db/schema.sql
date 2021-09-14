DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  title_id INT NULL,
  manager_id INT NULL
  -- employment_status BOOLEAN NOT NULL <---Add later as bonus?
  -- ON DELETE SET NULL
);

CREATE TABLE employee_title (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title_name VARCHAR(30) NULL,
  salary DECIMAL NULL,
  department_id INT NULL
);

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  department_name VARCHAR(100) NULL
); 