const db = require("../config/connection");
const inquirer = require("inquirer");
const ct = require("console.table");

// View all employees
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

// View employees sorted by department id in ascending order
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

// View employees sorted by manager id in ascending order
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

// View all departments 
const viewDepartments = async () => {
  await db.promise().query(`SELECT * FROM department`)
    .then(([result]) => {
      console.table('Departments', result);
    })
};

// Add a new employee 
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

// Delete an employee
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

// View all employee titles 
const viewEmpTitles = async () => {
  await db.promise().query(`SELECT * FROM title`)
    .then(([result]) => {
      console.table('Employee Titles', result);
    })
};

// Update an existing employee's title
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
      }
    ]
  ).then((data) => {
    db.promise().query(`
    UPDATE employee
    SET title_id='${data.new_title}'
    WHERE employee.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Employee Titles', result);
      })
  })
}

// Delete an employee title
const delEmpTitle = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Input employee title to remove from system",
        name: 'id'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    DELETE FROM title
    WHERE title.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Employee', result);
      })
  })
}

// Update an existing employee's manager
const updateManager = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Input employee ID to Update",
        name: 'id'
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
    SET manager_id='${data.new_manager}'
    WHERE employee.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Employee Titles', result);
      })
  })
}

// Create a new employee title
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

// Add a new department 
const addDepartment = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Add department name",
        name: 'dept_name'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    INSERT INTO department (dept_name)
    VALUES ('${data.dept_name}')
    `)
      .then(([result]) => {
        console.table('Departments', result);
      })
  })
}

// Delete a department
const delDepartment = async () => {
  await inquirer.prompt(
    [
      {
        type: 'input',
        message: "Input department ID to remove from system",
        name: 'id'
      },
    ]
  ).then((data) => {
    db.promise().query(`
    DELETE FROM department
    WHERE department.id='${data.id}'
    `)
      .then(([result]) => {
        console.table('Departments', result);
      })
  })
}

// Ends the application 
const quitApp = () => db.end();

module.exports = {
  viewEmployees,
  viewEmpByDept,
  viewEmpByManager,
  viewDepartments,
  viewEmpTitles,
  addEmpTitle,
  addEmployee,
  addDepartment,
  updateEmpTitle,
  updateManager,
  delEmployee,
  delEmpTitle,
  delDepartment,
  quitApp
}