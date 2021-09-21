const connection = require("../config/connection");

class dbNavigator {
    constructor(connection) {
        this.connection = connection;
    }

    viewEmployees() {
        return  this.connection.promise().query("SELECT * FROM employee");
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
        return this.connection.promise().query()
        // Need to finish all of the queries 
    }

    updateEmpTitle() {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?",[roleId, employeeId])
    }

    addEmpTitle() {

    }

    viewDepartments() {

    }

    addDepartment() {

    }
}

module.exports = new dbNavigator(connection);