// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPLv3",
            "BSD-3-Clause",
            "None",
        ],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install the dependencies?",
        default: 'npm i',
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: 'npm test',
    },
    {
        type: "input",
        name: "use",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    },
])  // TODO: Create a function to write README file
    .then((userInput) => {
        const readmeContent = generateMarkdown.generateMarkdown(userInput);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('YAY! you have created a README.md!'));
    });


