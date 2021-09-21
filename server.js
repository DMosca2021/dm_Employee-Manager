const inquirer = require('inquirer');
const dbNav = require("./lib/index");
const ct = require("console.table");
const connection = require("./config/connection")


const questions = [
  "What would you like to do?",                                   //0
  "What is the name of the department?",                          //1
  "What is the name of the role?",                                //2
  "What is the employee's first name?",                           //3
  "What is the employee's last name?",                            //4
  "What is the employee's role?",                                 //5
  "Who is the employee's manager?",                               //6
  "Which employee's role do you want to update?",                 //7
  "Which role do you want to assign to the selected employee?"    //8
]

function initApp() {
  function welcomeMenu() {
      console.log("Welcome to your employee management system.");
      inquirer.prompt([
          {
              type: "list",
              name: "menu",
              message: questions[0],
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
                  "Quit"
              ]
          }
      ]).then((userChoice) => {
          switch (userChoice.choices) {
              case "View all employees":
                  viewEmployees();
                  break;
              case "View employees by department":
                  viewEmpByDept();
                  break;
              case "View employees by manager":
                  viewEmpByManager();
                  break;
              case "View all managers":
                  viewManagers();
                  break;
              case "Add employee":
                  addEmployee();
                  break;
              case "Delete employee":
                  delEmployee();
                  break;
              case "View all employee titles":
                  viewEmpTitles();
                  break;
              case "Update employee title":
                  updateEmpTitle();
                  break;
              case "Add employee title":
                  addEmpTitle();
                  break;
              case "View all departments":
                  viewDepartments();
                  break;
              case "Add department":
                  addDepartment();
                  break;
              case "Quit":
                  console.log("You have managed your employees. All changes have been saved.")
                  mysql.end();
                  break;
          }
      });
  };
  welcomeMenu();


  // Need to add functions to call the queries from the index.js

  // function viewEmployees() {

  // }
}

initApp();