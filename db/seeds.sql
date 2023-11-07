INSERT INTO department (id, first_name)
VALUES (1, "electronics"),
       (2, "grocery"),
       (3, "automotive"),
       (4, "frozen");

INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "shift manager", "$42,000", 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "josh", "mitchum", 5, null);