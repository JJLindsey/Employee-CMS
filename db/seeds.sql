INSERT INTO department ()
VALUES
    ('Marketing'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Director', 65, 1),
    ('Analyst', 50, 1),
    ('Jr Developer', 55, 2),
    ('Sr Engineer', 65, 2),
    ('Accountant', 35, 3),
    ('Dir Accounting', 65, 3),
    ('Paralegal',40, 4),
    ('Attorney', 65, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Coltrane', 1,NULL),
    ('Simpson', 'Lorna', 2, 1),
    ('Salvador', 'Dali', 3, 4,),
    ('Leonardo', 'daVinci', 4, NULL),
    ('MC', 'Escher', 5, 6),
    ('Gustave', 'Caillebotte', 6, NULL)
    ('Artemisia', 'Gentileschi', 7, 8),
    ('Augusta', 'Savage',8, NULL);