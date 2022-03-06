// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js"); //get md template

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a short description of your project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license should your project have?',
            choices: [ 'Public', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What should a user know about using/limitations of this application?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What should the user know about tests that have been run?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the repository URL?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know to contribute to the repo?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What does the user need to know to install this (ex: install)?',
        },
        {
            type: 'input',
            name: 'page',
            message: 'What is the URL to your public application (if applicable)?',
        },
    ];

// TODO: Create a function to write README file
// syntax: fs.writeFile( file, data, options, callback )
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!!!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((data) => writeToFile(data.title, data))
    // .then((data) => {
    //     console.log(data)
    //     writeToFile(`README.md`, generateMarkdown(data));
    // });
};

// Function call to initialize app
init();
