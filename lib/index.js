const connection = require("../config/connection");

class dbNavigator {
  constructor(connection) {
    this.connection = connection;
  }

  viewEmployees() {
    return this.connection
    .promise()
    .query("SELECT * FROM employee");
  }

  viewEmpByDept() {
    return this.connection
      .promise()
      .query("SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.department_name AS department FROM employee LEFT JOIN occupation ON employee.occupation_id = occupation.id LEFT JOIN department ON occupation.department_id = department.id ORDER BY department ASC;")
      .then(([rows]) => rows);
  }

  viewEmpByManager() {}

  viewManagers() {}

  addEmployee() {}

  delEmployee() {}

  viewEmpTitles() {
    return this.connection.promise().query();
    // Need to finish all of the queries
  }

  updateEmpTitle() {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }

  addEmpTitle() {}

  viewDepartments() {}

  addDepartment() {}
}

module.exports = new dbNavigator(connection);
