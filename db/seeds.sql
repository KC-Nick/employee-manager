INSERT INTO department (department_name)
VALUES ("electronics"),
       ("grocery"),
       ("automotive"),
       ("frozen");

INSERT INTO roles (title, salary)
VALUES ("shift manager", "42000"),
       ("associate", "33000"),
       ("associate", "33000"),
       ("associate", "33000");

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("josh", "mitchum", null),
       ("jessica", "maryam", null),
       ("heath", "carrison", 1),
       ("rosalind", "rosemary", 1);