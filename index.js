const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (userInput) => {
    return `# ${userInput.projectTitle}
    
 ## [Description](#project-description)

  #### Table of Contents
  1. [Installation](#installation-instructions)
  2. [Usage](#usage-information)
  3. [License](#license)
  4. [Contributing](#contributor-guidelines)
  5. [Tests](#test-instructions)
  6. [Questions](#questions)

  ## Description
  * ${userInput.description}
  ## Installation
  * To install necessary dependencies, run the following command: ${userInput.install}
  ## Usage 
  * ${userInput.use}
  ## License
  * This project is licensed under the ${userInput.license}
  ## Contributing
  * ${userInput.contributions}
  ## Tests
  * To run test, run the following command: ${userInput.test}
  
  ## Questions
  * If you have any questions about the rep, open an issue or contact me directly at  ${userInput.email}
  * You can find more of my work at [${userInput.github}](http://github.com/${userInput.github})`;

}

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
        name: "project_title",
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
            "MIT License",
            "APACHE 2.0 License",
            "GPL 3.0 License",
            "BSD 3 License",
            "None",
        ],
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install the dependencies?"

    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"

    },
    {
        type: "input",
        name: "test",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    },
])
    .then((userInput) => {
        const generateREADMEmd = generateREADME(userInput);

        fs.writeFile('README.md', generateREADMEmd, (err) =>
            err ? console.log(err) : console.log('YAY! you have created a README.md!'));
    });
;


