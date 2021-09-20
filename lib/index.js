const db = require("../config/connection");
const ct = require("console.table");
const inquirer = require("inquirer");

class choice {
    constructor(connection) {
        this.connection = connection;
    }

    viewEmployees() {
        return  this.connection
            .promise()
            .query("SELECT * FROM employee")
    }

    viewEmpByDept() {

    }

    viewEmpByManager() {

    }

    viewManagers() {

    }

    addEmployee() {

    }

    delEmployee() {

    }

    viewEmpTitles() {

    }

    updateEmpTitle() {

    }

    addEmpTitle() {

    }

    viewDepartments() {

    }

    addDepartment() {

    }
}