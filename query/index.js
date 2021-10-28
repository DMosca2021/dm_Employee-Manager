const db = require("../config/connection");
const inquirer = require("inquirer");
const ct = require("console.table");


const viewEmployees = async () => {
  await db.promise().query(`
    SELECT employee.id AS ID, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.title_id AS 'Title ID', employee.manager_id AS 'Manager ID'
    FROM employee
    LEFT JOIN title ON employee.title_id = title.title
    LEFT JOIN department ON title.department_id = department.dept_name
    `)
    .then(([result]) => {
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
    .then(([result]) => {
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
    .then(([result]) => {
      console.table('Employees by manager', result);
    })
}

const viewDepartments = async () => {
  await db.promise().query(`SELECT * FROM department`)
    .then(([result]) => {
      console.table('Departments', result);
    })
};

const addEmployee = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Add employee's first name",
        name: 'first_name'
      },
      {
        type: 'input',
        message: "Add employee's last name",
        name: 'last_name'
      },
      {
        type: 'input',
        message: "Add employee's title ID",
        name: 'title_id'
      },
      {
        type: 'input',
        message: "Add employee's manager",
        name: 'manager_id'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    INSERT INTO employee (first_name, last_name, title_id, manager_id)
    VALUES ('${data.first_name}', '${data.last_name}', '${data.title_id}', '${data.manager_id}')
    `)
      .then(([result]) => {
        console.table('Employee', result);
      })
  })
}

const delEmployee = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Input employee ID to remove from system",
        name: 'id'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    DELETE FROM employee
    WHERE employee.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Employee', result);
      })
  })
}

const viewEmpTitles = async () => {
  await db.promise().query(`SELECT * FROM title`)
    .then(([result]) => {
      console.table('Employee Titles', result);
    })
};

const updateEmpTitle = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Input employee ID to Update",
        name: 'id'
      },
      {
        type: 'input',
        message: "Input new employee title ID",
        name: 'new_title'
      },
      {
        type: 'input',
        message: "Input new employee manager ID",
        name: 'new_manager'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    UPDATE employee
    SET title_id='${data.new_title}', manager_id='${data.new_manager}'
    WHERE employee.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Employee', result);
      })
  })
}

const addEmpTitle = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Add title name",
        name: 'title'
      },
      {
        type: 'input',
        message: "Add salary for title",
        name: 'salary'
      },
      {
        type: 'input',
        message: "Add title's department ID",
        name: 'department_id'
      }
    ]
  ).then((data) => {
    db.promise().query(`
    INSERT INTO title (title, salary, department_id)
    VALUES ('${data.title}', '${data.salary}', '${data.department_id}')
    `)
      .then(([result]) => {
        console.table('Employee Titles', result);
      })
  })
}

const quitApp = () => db.end();

module.exports = {
  viewEmployees,
  viewEmpByDept,
  viewEmpByManager,
  viewDepartments,
  viewEmpTitles,
  updateEmpTitle,
  addEmpTitle,
  addEmployee,
  delEmployee,
  quitApp
}