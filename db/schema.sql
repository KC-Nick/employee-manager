DROP DATABASE IF EXISTS employee_db;
-- delete ^ after finished with project before turning in
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES department(id),
    PRIMARY KEY (id),
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id),
    ON DELETE SET NULL
);