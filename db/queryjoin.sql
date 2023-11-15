SELECT *
       FROM employee
       JOIN roles ON roles.rolesID = employee.rolesID;
SELECT *
       FROM roles
       JOIN department ON department.id = roles.department_id;