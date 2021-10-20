INSERT INTO employee (first_name, last_name, title_id, manager_id)
VALUES ("Devin", "Mosca", 001, 000),
       ("Lincoln", "Spaeth", 002, 001),
       ("Adeline", "Lister", 003, 002),
       ("Clarence", "Mondragon", 001, 000),
       ("Dean", "Reams", 004, 001);

INSERT INTO title (title, salary, department_id)
VALUES ("Team Leader", 120000, 001),
       ("Engineer", 095000, 005),
       ("Sales Associate", 055000, 004),
       ("Tester", 045000, 001);

INSERT INTO department (dept_name)
VALUES ("Research & developement"),
       ("Accounting"),
       ("Human Resources"),
       ("Sales"),
       ("Engineering");
       

