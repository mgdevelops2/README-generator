// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: InputPrompt } = require('inquirer/lib/prompts/input');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Did you have any collaborators?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell me a little about your project, what does it do? Why did you build it? How does it work?'
    },
    {
        type: 'input',
        name: 'licenses',
        message: 'Did you use any licenses?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this app?'
    },
    {
        type: 'input',
        name: 'howTo',
        message: 'How do you use this app?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can someone make contributions?'
    },
    {
        type: 'input',
        name: 'issues',
        message: 'How do report issues?'
    }


];

// TODO: Create a function to write README file
// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}
init();

