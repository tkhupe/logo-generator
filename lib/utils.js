// import filesystem from 'fs';
const filesystem = require('fs');

function writeToFile(filename, data) {
    filesystem.writeFile(filename, data, function (err) {
        if (err) {
            return console.log(err);
        
        }
        console.log("Generated log.svg");
    });
}

class Svg {
    constructor() {
        this.textEl = ''
        this.shapeEl = ''
    }
    render() {
        return `<svg version="2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
    }
    setTextEl(text, color) {
        this.textEl =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render()
    }
}
module.exports = {Svg, writeToFile}