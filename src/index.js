import fs from 'fs';
import inquirer from 'inquirer';

// Define the questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to generate the README content
function generateREADME(answers) {
    return `# ${answers.title}

![License Badge](https://img.shields.io/badge/license-${answers.license}-blue)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Questions
For additional questions, contact me at:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        fs.writeFileSync('README.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('README.md generated!')
        );
    });
}

// Initialize the app
init();