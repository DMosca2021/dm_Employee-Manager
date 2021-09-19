
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
// const Connection = require('mysql2/typings/mysql/lib/Connection');

// const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user INPUT


