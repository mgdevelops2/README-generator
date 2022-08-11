const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([

    {
        type: 'input',
        message: 'What is your prefered language?',
        name: 'tech-Language',
        choices: ['html', 'css', 'javascript'],
    },
    {
        type: 'list',
        message: 'What do I call you on?',
        name: 'contact',
        choices:[]
      },
    
  ])
  .then((response) =>
  fs.writeFile
  );