// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'what is your name?',
//             name: 'name',
//         },
//         {
//             type: 'checkbox',
//             message: 'what languages do you know?',
//             name: 'techstack',
//             choices: ['HTML', 'CSS', 'JAVASCRIPT', 'MySQL'],
//         },
//         {
//             type: 'list',
//             message: 'What is your preferred method of communication?',
//             choices: ['email', 'phone', 'text'],

//         },
//     ])
//     .then((response) => {
//         (console.log(response))
//         fs.writeFile('log.txt', JSON.stringify, (res, null, '\t'), (err) =>
//             // TODO: Describe how this ternary operator works
//             err ? console.error(err) : console.log('Success!')
//     });
