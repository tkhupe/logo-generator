const {writeToFile, Svg} = require('./lib/utils');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/utils');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to the characters you want to display",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the color, or the color code of the text you want to display",
    },
    {
        type: "list",
        name: "shapes",
        message: "Choose the shape of your logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color, or the color code of the shape you want",
    },
];
