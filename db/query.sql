SELECT department.id AS name, roles.department_id as department_id
       FROM department 
       JOIN roles ON roles.department_id = department.id;