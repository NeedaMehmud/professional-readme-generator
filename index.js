// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Github Username?',
        username: 'username'

    }
])
    .then((response) => {
        (console.log(response))
        fs.writeFile('README.md', JSON.stringify, (res, null, '\t'), (err) =>
            // TODO: Describe how this ternary operator works
            err ? console.error(err) : console.log('Success!')
        )
    })

