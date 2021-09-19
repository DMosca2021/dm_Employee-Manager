    // Need to use prompts to:
    // View all employees <--table
    // Add employee <--seed?
    // Update employee role 
    // View all roles <--table
    // Add role <--seed?
    // View all departments <--table
    // Add department <--seed?
    // Quit

    // Questions from video demo:

        // What would you like to do? <-- LIST menu (noted below)
            // View all Employees, roles, dept => Shows contents of each table in the db

            // Add dept => What is the name of the department? <-- INPUT name, notify name added, return to menu.

            // Add role => What is the name of the role? <-- INPUT name, then...
                // Add salary => What is the salary of the role? <-- INPUT number then...
                    // Add role to department => Which dept does the role belong to? <--choose from LIST of dept in db, notify that role was added to the db, return to menu

            // Add employee => What is the employee's first/last name? INPUT first name, then last name, then...
                // What is the employee's role? <--choose from LIST, then...
                    // Who is the employee's manager? <--choose from LIST, notify employee was added to db, return to menu

            // Update employee role => Which employee's role do you want to update? <-- choose from LIST of employees in db, then...
                // Which role do you want to assign to the selected employee? <--choose from LIST of roles in the db, return to menu

            // Quit => then the application

            
//---------------------------------------------------------------------------------------------------------
// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user INPUT
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

// use switch case to go through the menu items and run associated functions. Ex: View all employees --> Chosen --> runs viewEmployees function.

function initApp() {

    function welcomeMenu() {
        console.log("Welcome to your employee management system.");
        console.log("What would you like to do?")
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
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter manager's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an ID number.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter manager's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address:";
                }
            },
            {
                type: "input",
                name: "managerNum",
                message: "Enter manager's office number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an office number.";
                }
            },
        ]).then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerNum);
            teamArray.push(manager);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Choose next team member to add.",
                choices: [
                    "Engineer",
                    "Intern",
                    "Cancel"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    generateHTML(teamArray);
            }
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter engineer's name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter engineer's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an ID number.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter engineer's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter engineer's GitHub username:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's GitHub username.";
                }
            },
        ]) .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }
    
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter intern's name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name.";
                }  
            },
            {
                type: "input",
                name: "internId",
                message: "Enter intern's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an number.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter intern's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Where does the intern attend school:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a school.";
                }
            },
        ]) .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function generateHTML() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        console.log("Generating Team Profile.... ");
        console.log(teamArray);
        fs.writeFileSync(outputPath, render(teamArray), "utf-8");
    }

    createManager();
}

initApp();
// |^^^Template for inquirer^^^| -- Taken from week9 homework.
