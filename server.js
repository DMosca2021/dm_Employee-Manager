const inquirer = require("inquirer");
const ct = require("console.table");
const connection = require("./config/connection");
// const dbNav = require("./lib/index");


function initApp() {
  console.log("Welcome to the Employee Manager");
  function welcomeMenu() {
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
      .then(async userChoice => {
        switch (userChoice.menu) {
          case "View all employees":
            await viewEmployees();
            break;
          case "View employees by department":
            await viewEmpByDept();
            break;
          case "View employees by manager":
            await viewEmpByManager();
            break;
          case "View all managers":
            await viewManagers();
            break;
          case "Add employee":
            await addEmployee();
            break;
          case "Delete employee":
            await delEmployee();
            break;
          case "View all employee titles":
            await viewEmpTitles();
            break;
          case "Update employee title":
            await updateEmpTitle();
            break;
          case "Add employee title":
            await addEmpTitle();
            break;
          case "View all departments":
            await viewDepartments();
            break;
          case "Add department":
            await addDepartment();
            break;
          case "Quit":
            console.log("You have managed your employees. All changes have been saved.");
            prompt
            break;
        }
      });
  }
  welcomeMenu();
}

initApp();