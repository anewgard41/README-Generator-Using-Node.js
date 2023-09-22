// TODO: Include packages needed for this application
const fs = require ("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");




// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your preferred email address or the address associated with your Github user?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. What do you wish to create?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
