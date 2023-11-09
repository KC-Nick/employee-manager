INSERT INTO department (id, first_name)
VALUES (NULL, "electronics"),
       (NULL, "grocery"),
       (NULL, "automotive"),
       (NULL, "frozen");

INSERT INTO roles (id, title, salary, department_id)
VALUES (NULL, "shift manager", "42000", 1);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (NULL, "josh", "mitchum", 2);