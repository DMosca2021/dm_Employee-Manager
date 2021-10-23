const db = require("../config/connection");
const inquirer = require("inquirer");
const ct = require("console.table");


const viewEmployees = async () => {
  await db.promise().query(`SELECT * FROM employee`)
    .then( ([result]) => {
      console.table('Employees', result);
    })
}

// const viewEmpByDept = async () => {

// }

const viewDepartments = async () => {
  await db.promise().query(`SELECT * FROM department`)
    .then( ([result]) => {
      console.table('Departments', result);
    })
};

const quitApp = () => db.end();

module.exports = {
  viewEmployees,
  viewDepartments,
  quitApp
}