const db = require("../config/connection");
const inquirer = require("inquirer");
const ct = require("console.table");


const viewEmployees = async () => {
  await db.promise().query(`SELECT * FROM employee`)
    .then( ([result]) => {
      console.table('Employees', result);
    })
}

const viewEmpByDept = async () => {
  await db.promise().query(`
    SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department_id AS department
    FROM employee
    LEFT JOIN title ON employee.title_id = title.id
    LEFT JOIN department ON title.department_id = department.id
    ORDER BY department ASC
    `)
    .then( ([result]) => {
      console.table('Employees by Department', result);
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
  viewDepartments,
  quitApp
}