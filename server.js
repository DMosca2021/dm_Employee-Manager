const inquirer = require("inquirer");
const ct = require("console.table");
const connection = require("./config/connection");
const query = require("./query");

function initApp() {
  console.log("Welcome to your employee management system.");
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View employees by department",
        "View employees by manager",
        "View all managers",
        "Add employee",
        "Delete employee",
        "View all employee titles",
        "Update employee title",
        "Add employee title",
        "View all departments",
        "Add department",
        "Quit",
      ],
    })
    .then(async (userChoice) => {
      switch (userChoice.menu) {
        case "View all employees":
          await query.viewEmployees();
          initApp();
          break;
        case "View employees by department":
          await query.viewEmpByDept();
          initApp();
          break;
        case "View employees by manager":
          await query.viewEmpByManager();
          initApp();
          break;
        case "Add employee":
          await query.addEmployee();
          initApp();
          break;
        case "Delete employee":
          await query.delEmployee();
          initApp();
          break;
        case "View all employee titles":
          await query.viewEmpTitles();
          initApp();
          break;
        case "Update employee title":
          await query.updateEmpTitle();
          initApp();
          break;
        case "Add employee title":
          await query.addEmpTitle();
          initApp();
          break;
        case "View all departments":
          await query.viewDepartments();
          initApp();
          break;
        // case "Add department":
        //   await addDepartment();
        //   break;
        case "Quit":
          console.log(
            "You have managed your employees. All changes have been saved."
          );
          query.quitApp();
      }
    });

  
}

initApp();
