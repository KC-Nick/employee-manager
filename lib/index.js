const inquirer = require('inquirer');
const db = require('../server.js');
const { addDepartment, addRole, addEmployee } = require('../lib/addfunctions.js')

const initPrompt = [
    {
        name: 'init',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Check Departments', 'Check Roles', 'Check Employees', 'Add Data', 'Delete Data', 'Update Employee']
    },
    {
        name: 'addInit',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add Department', 'Add Role', 'Add Employee', 'Back'],
        when: (response) => response['init'] === 'Add Data'
    },
    {
        name: 'deleteInit',
        type: 'list',
        message: 'What would you like to delete?',
        choices: ['Delete Department', 'Delete Role', 'Delete Employee'],
        when: (response) => response['init'] === 'Delete Data'
    },
    {
        name: 'deleteDep',
        type: 'input',
        message: 'What is the department ID that you would like to delete?',
        when: (response) => response['deleteInit'] === 'Delete Department'
    },
    {
        name: 'deleteRole',
        type: 'input',
        message: 'What is the role ID that you would like to delete?',
        when: (response) => response['deleteInit'] === 'Delete Role'
    },
    {
        name: 'deleteEm',
        type: 'input',
        message: 'What is the employee ID that you would like to delete?',
        when: (response) => response['deleteInit'] === 'Delete Employee'
    }
];

function init() {
    inquirer.prompt(initPrompt)
        .then((response) => {
            console.log('initPrompt', response);
            if (response.init == 'Check Departments') {
                db.query('SELECT * FROM department',
                    function (err, result) {
                        console.table(result);
                        loopQuestions();
                    });
            } else if (response.init == 'Check Roles') {
                db.query('SELECT * FROM roles JOIN department ON department.id = roles.department_id;',
                    function (err, result) {
                        console.table(result);
                        loopQuestions();
                    });
            } else if (response.init == 'Check Employees') {
                db.query('SELECT * FROM employee JOIN roles ON roles.rolesID = employee.rolesID;',
                    function (err, result) {
                        console.table(result);
                        loopQuestions();
                    });
            } else if (response.deleteInit == 'Delete Department') {
                db.query(`DELETE FROM department WHERE id = ?`,
                    response.deleteDep,
                    function () {
                        console.log('Deleted!');
                        loopQuestions();
                    }
                )
            } else if (response.deleteInit == 'Delete Role') {
                db.query(`DELETE FROM roles WHERE rolesID = ?`,
                    response.deleteRole,
                    function () {
                        console.log('Deleted!');
                        loopQuestions();
                    }
                )
            } else if (response.deleteInit == 'Delete Employee') {
                db.query(`DELETE FROM employee WHERE employeeID = ?`,
                    response.deleteEm,
                    function () {
                        console.log('Deleted!');
                        loopQuestions();
                    }
                )
            } else if (response.addInit == 'Add Department') {
                addDepartment()
                    .then(() => {
                        db.query('SELECT * FROM department',
                            function (err, result) {
                                console.table(result);
                                loopQuestions();
                            });
                    });
            } else if (response.addInit == 'Add Role') {
                addRole()
                    .then(() => {
                        db.query('SELECT * FROM roles',
                            function (err, result) {
                                console.table(result);
                                loopQuestions();
                            });
                    });
            } else if (response.addInit == 'Add Employee') {
                addEmployee()
                    .then(() => {
                        console.log("addEmployee");
                        db.query('SELECT * FROM employee',
                            function (err, result) {
                                console.log(err);
                                console.table(result);
                                loopQuestions();
                            });
                    });
            } else if (response.init === 'Update Employee') {
                inquirer.prompt([
                    {
                        name: 'updateEm',
                        type: 'input',
                        message: 'What is the ID of the employee you would like to update?',
                    },
                    {
                        name: 'roleEm',
                        type: 'input',
                        message: 'Please enter the ID of the role this employee will be updated to.'
                    }
                ])
                    .then((response) => {
                        db.query(`UPDATE employee SET rolesID = ? WHERE employeeID = ?`,
                            [response.roleEm,
                            response.updateEm
                            ],
                            function () {
                                console.log('Updated!');
                                loopQuestions();
                            });
                    });
            } else if (response.addInit == 'Back') {
                init();
            }
        });
};

function loopQuestions() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Run again, or exit?',
        choices: ['Run again', 'Exit']
    })
        .then((answer) => {
            if (answer.choice === 'Run again') {
                init();
            } else if (answer.choice === 'Exit') {
                process.exit();
            }
        })
};


init();
