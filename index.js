// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require('./assets/utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    name: "projectName",
    message: "What is title of your project?",
    type: "input",
  },
  {
    name: "description",
    message:
      "Provide a project description. When done, save the file and close the editor.\n",
    type: "editor",
    default: "No description.",
  },
  {
    name: "installInstructions",
    message:
      "Provide installation instructions. When done, save the file and close the editor.\n",
    type: "editor",
    default: "No installation instructions.",
  },
  {
    name: "usageInformation",
    message:
      "Provide project usage information. When done, save the file and close the editor.\n",
    type: "editor",
    default: "No usage information.",
  },
  {
    name: "testInstructions",
    message:
      "Provide test intructions. When done, save the file and close the editor.\n",
    type: "editor",
    default: "No test instructions.",
  },
    {
    name: "contributionGuidelines",
    message:
      "Provide contribution guidelines. When done, save the file and close the editor.\n",
    type: "editor",
    default: "You may not contribute to this project at this time.",
  },
  {
    name: "license",
    message: "Choose a license for your project.",
    type: "list",
    choices: [
      "GNU AGPLv3.0",
      "GNU GPLv3.0",
      "GNU LGPLv3.0",
      "Mozilla Public License 2.0",
       "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    name: "licenseColor",
    message: "Choose a color for your license badge.",
    type: "list",
    choices: [
      "green",
      "blue",
      "yellow",
      "red",
      "orange",
      "lightgrey",
      "blueviolet",
      "brightgreen",
      "yellowgreen",
    ],
  },
  {
    name: "userGitHubName",
    message: "What is your Github username?",
    type: "input",
  },
  {
    name: "userEmail",
    message: "What is your email address?",
    type: "input",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  const markdownText = utils.generateMarkdown(data);
  fs.writeFile(fileName, markdownText, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README file has been generated.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("generatedREADME.md", answers);
  });
}

// Function call to initialize app
init();
