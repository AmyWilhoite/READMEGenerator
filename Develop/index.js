// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.ask([
        {
          info: 'input',
          topic: 'github',
          question: 'What is your GitHub username?',
        },
        {
            info: 'input',
            topic: 'email',
            question: 'What is your email address?',
          },
          {
            info: 'input',
            topic: 'description',
            question: 'What is a short description of your project?',
          },
          {
            info: 'input',
            topic: 'license',
            question: 'What type of license should your project have?',
          },
          {
            info: 'input',
            topic: 'usage',
            question: 'What should a user know about using/limitations of this application?',
          },
          {
            info: 'input',
            topic: 'test',
            question: 'What command should be run to run tests?',
          },
          {
            info: 'input',
            topic: 'repo',
            question: 'What is the repository URL?',
          },
          {
            info: 'input',
            topic: 'contributing',
            question: 'What does the user need to know to contribute to the repo?',
          },
          {
            info: 'input',
            topic: 'installation',
            question: 'What does the user need to know to install this (ex: install)?',
          },
          
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
