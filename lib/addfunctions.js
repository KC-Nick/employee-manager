const inquirer = require('inquirer');
const db = require('../server.js');

const departmentResponse = [
    {
        name: 'dep_name',
        type: 'input',
        message: 'Enter name of department.',
        validate: (text) =>
            text.length <= 30 || "Must be 30 characters or less."
    }
];

const rolesResponse = [
    {
        name: 'title',
        type: 'input',
        message: 'Enter role title.',
        validate: (title) =>
            title.length <= 30 || "Must be 30 characters or less."
    },
    {
        name: 'salary',
        type: 'input',
        message: 'What is the salary for this role?'
    },
    {
        name: 'department_id',
        type: 'input',
        message: 'What is the ID for the department this role works in?'
    }
];
const employeeResponse = [
    {
        name: 'first_name',
        type: 'input',
        message: 'Enter first name of employee.',
        validate: (first_name) =>
            first_name.length >= 1 || "Name must not be null."
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Enter last name of employee.',
        validate: (last_name) =>
            last_name.length >= 1 || "Name must not be null."
    },
    {
        name: 'role_id',
        type: 'input',
        message: 'What is the ID for the role this employee has?',
        validate: (role_id) =>
            role_id.length >= 1 || "Role must not be null."
    },
    {
        name: 'manager_id',
        type: 'input',
        message: 'What is the ID of the supervisor for this employee?'
    }
];


async function addDepartment() {
    await inquirer.prompt(departmentResponse)
        .then(response => {
            console.log(response);
            db.query(`INSERT INTO department (department_name)
       VALUES (?)`,
                response.dep_name)
        });
};

async function addRole() {
    await inquirer.prompt(rolesResponse)
        .then(response => {
            console.log(response);
            db.query(`INSERT INTO roles (title, salary, department_id)
       VALUES (?, ?, ?)`,
                [response.title,
                response.salary,
                response.department_id])
        })
};

async function addEmployee() {
    await inquirer.prompt(employeeResponse)
        .then(response => {
            console.log(response);
            db.query(`INSERT INTO employee (first_name, last_name, rolesID,  manager_id)
       VALUES (?, ?, ?, ?)`,
                [response.first_name,
                response.last_name,
                response.role_id,
                response.manager_id])
        })
};

module.exports = {
    addDepartment, addRole, addEmployee
};