// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = portfolioData => {
    return inquirer.prompt([
    {
     type: 'input',
     name: 'projectTitle',
     message: 'What is the name of your project?',
     validate : projectTitleInput => {
        if (projectTitleInput) {
            return true;
        } else {
            console.log('Project name!');
            return false;
        }
     }
    },
    {
     type: 'input',
     name: 'description',
     message: 'Provide description of projecT',
     validate : descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Need to enter project description');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'installation',
     message: 'What are steps required to install project? Provide a step-by-step description. ',
     validate : installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Enter installation information!');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'usage',
     message: 'Provide instructions and examples for use.',
     validate : usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Need to enter usage information.');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'contributing',
     message: 'Provide contributors of project.',
     validate : contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('Need to enter contribution information.');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'tests',
     message: 'Provide tests for application and then provide examples on how to run them.',
     validate : testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('Need to enter tests information.');
            return false;
        }
     }  
    },
    {
     type: 'checkbox',
     name: 'license',
     message: 'Select the license(s) you use for this project. You can selected multiple licenses if needed.',
     choices: ['MIT', 'General Public License 2.0', 'General Public License 3.0', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'Apache License 2.0'], 
    },
    {
     type: 'input',
     name: 'github',
     message: 'Enter GitHub Username.',
     validate : githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter GitHub username.');
            return false;
        }
     }  
    },
    {
     type: 'input',
     name: 'emailAddress',
     message: 'Enter your email address.',
     validate : emailAddressInput => {
        if (emailAddressInput) {
            return true;
        } else {
            console.log('Please enter email address.');
            return false;
        }
     }  
    }
    ])
};

questions()
    .then(portfolioData => {
        const pageMd = generateMarkdown(portfolioData);

        // TODO: Create a function to write README file
        fs.writeFile('README.md', pageMd, err => {
            if (err) throw new Error(err);

            console.log('Page created! Check out README.md in this directory to see it!');
        });
    });

// TODO: Create a function to initialize app
// function init() {};
// Function call to initialize app
// init();