// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const generateMarkdown = require("./assets/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
// const questions = [
//     "Project Title:",
//     "Description:",
//     "Installation:",
//     "Usage:",
//     "Credits:",
//     "License:",
//     "How to contribute:",
//     "Tests:",
// ]
    // Questions from video demo:

        // What would you like to do? <-- List menu (noted below)
            // View all Employees, roles, dept => Shows contents of each table in the db

            // Add dept => What is the name of the department? <-- Input name, notify name added, return to menu.

            // Add role => What is the name of the role? <-- Input name, then...
                // Add salary => What is the salary of the role? <-- Input number then...
                    // Add role to department => Which dept does the role belong to? <--choose from list of dept in db, notify that role was added to the db, return to menu

            // Add employee => What is the employee's first/last name? Enter first name, then last name, then...
                // What is the employee's role? <--choose from list, then...
                    // Who is the employee's manager? <--choose from list, notify employee was added to db, return to menu

            // Update employee role => Which employee's role do you want to update? <-- choose from list of employees in db, then...
                // Which role do you want to assign to the selected employee? <--choose from list of roles in the db, return to menu

            // Quit => then the application
            
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'title',
//       message: questions[0],
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: questions[1],
//     },
//     {
//       type: 'input',
//       name: 'install',
//       message: questions[2],
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: questions[3],
//     },
//     {
//       type: 'input',
//       name: 'credits',
//       message: questions[4],
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: questions[5],
//       choices: ["Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license", "BSD 3-clause New or Revised license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License v3.0", "ISC", "MIT", "Mozilla Public License 2.0", "SIL Open Font License 1.1", "The Unlicense", "zLib License"]
//     },
//     {
//       type: 'input',
//       name: 'contribute',
//       message: questions[6],
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: questions[7],
//     },
//   ]);
// };

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// const init = () => {
//   promptUser()
//     .then((data) => writeFileAsync('genREADME.md', generateMarkdown(data)))
//     .then(() => console.log('Successfully wrote to genREADME.md'))
//     .catch((err) => console.error(err));
// };
// Function call to initialize app
// init();

// |^^^Template for inquirer^^^| -- Taken from week9 homework.
    // Need to use prompts to:
    // View all employees <--table
    // Add employee <--seed?
    // Update employee role 
    // View all roles <--table
    // Add role <--seed?
    // View all departments <--table
    // Add department <--seed?
    // Quit