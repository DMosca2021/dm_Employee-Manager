const inquirer = require("inquirer");
const ct = require("console.table");
const connection = require("./config/connection");
const query = require("./query");

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());


function initApp() {
  console.log("Welcome to your employee management system.");
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employee titles",
        "View all departments",
        "View employees by department",
        "View employees by manager",
        "Add employee",
        "Add employee title",
        "Add department",
        "Update employee title",
        "Update employee manager",
        "Delete employee",
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
        case "View all departments":
          await query.viewDepartments();
          initApp();
          break;
        case "View all employee titles":
          await query.viewEmpTitles();
          initApp();
          break;
        case "Add employee":
          await query.addEmployee();
          initApp();
          break;
        case "Add employee title":
          await query.addEmpTitle();
          initApp();
          break;
        case "Add department":
          await query.addDepartment();
          initApp();
          break;
        case "Update employee title":
          await query.updateEmpTitle();
          initApp();
          break;
        case "Update employee manager":
          await query.updateManager();
          initApp();
          break;
        case "Delete employee":
          await query.delEmployee();
          initApp();
          break;
        case "Delete employee":
          await query.delEmployee();
          initApp();
          break;
        case "Delete department":
          await query.delDepartment();
          initApp();
          break;
        case "Quit":
          console.log(
            "You have managed your employees. All changes have been saved."
          );
          query.quitApp();
      }
    });


}

initApp();
