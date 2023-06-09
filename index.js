// import writeToFile from './lib/utils.js';
// import Svg from './lib/utils.js';
// import inquirer from 'inquirer';
// import Circle from './lib/shapes.js';
// import Square from './lib/shapes.js';
// import Triangle from './lib/shapes.js';

const inquirer = require('inquirer');
const {Svg, writeToFile} = require('./lib/utils.js');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

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

function init() {
    var svgString = "";
    var svgFile = "logo.svg";
    inquirer.prompt(questions).then(answers => {
        if(answers.text.length > 3) {
            console.log("Invalid! Please enter 1 - 3 characters");
            return;
        }
        let userShapeInput = answers.shapes;
        let userShape
        if(userShapeInput == 'Circle') {
            userShape = new Circle()
        }
        else if(userShapeInput == 'Square') {
            userShape = new Square()
        }
        else if(userShapeInput == 'Triangle') {
            userShape = new Triangle()
        }
        userShape.setColor(answers.shapeColor)

        var svg = new Svg();
        svg.setTextEl(answers.text, answers.textColor);
        svg.setShapeEl(userShape);
        svgString =svg.render();
        writeToFile(svgFile, svgString);
    })
}
init();
