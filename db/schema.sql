DROP DATABASE IF EXISTS cms;
CREATE DATABASE cms;
USE cms;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30),
    salary DECIMAL (65,5),
    department_id INTEGER,
    CONSTRAINT department_id FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INTEGER,
    CONSTRAINT role_id FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INTEGER(4)
);