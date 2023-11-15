INSERT INTO department (department_name)
VALUES ("electronics"),
       ("grocery"),
       ("automotive"),
       ("frozen");

INSERT INTO roles (title, salary, department_id)
VALUES ("shift manager", "42000", 1),
       ("shift manager", "42000", 2),
       ("associate", "33000", 1),
       ("associate", "33000", 2),
       ("associate", "33000", 3);

INSERT INTO employee (first_name, last_name, rolesID, manager_id)
VALUES ("josh", "mitchum", 1, null),
       ("jessica", "maryam", 2, null),
       ("heath", "carrison", 3, 1),
       ("rosalind", "rosemary", 4, 2);