const db = require("../config/connection");
const inquirer = require("inquirer");
const ct = require("console.table");


const viewEmployees = async () => {
  await db.promise().query(`
    SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name' 
    FROM employee
    LEFT JOIN title ON title.id = employee.title_id
    LEFT JOIN department ON department.id = title.department_id
    `)
    .then( ([result]) => {
      console.table('Employees', result);
    })
}

const viewEmpByDept = async () => {
  await db.promise().query(`
    SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.dept_name AS department
    FROM employee
    LEFT JOIN title ON employee.title_id = title.id
    LEFT JOIN department ON title.department_id = department.id
    ORDER BY department ASC
    `)
    .then( ([result]) => {
      console.table('Employees by Department', result);
    })
}

const viewEmpByManager = async () => {
  await db.promise().query(`
    SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.manager_id AS Manager, employee.title_id  AS Title
    FROM employee
    LEFT JOIN title ON title.id = employee.title_id
    LEFT JOIN department ON department.id = title.department_id
    ORDER BY manager_id ASC
    `)
    .then( ([result]) => {
      console.table('Employees by manager', result);
    })
}

const viewDepartments = async () => {
  await db.promise().query(`SELECT * FROM department`)
    .then( ([result]) => {
      console.table('Departments', result);
    })
};

const quitApp = () => db.end();

module.exports = {
  viewEmployees,
  viewEmpByDept,
  viewEmpByManager,
  viewDepartments,
  quitApp
}