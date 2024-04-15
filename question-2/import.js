"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
//create an instance of class.
var calculator = new export_1.Calculator();
//use the instance method.
console.log("ADDITION:", calculator.add(5, 2));
console.log("SUBTRACTION:", calculator.sub(5, 2));
console.log("MULTIPLICATION:", calculator.multiply(5, 2));
console.log("DIVISON:", calculator.divide(5, 2));
console.log("MODULUS:", calculator.modulus(5, 2));
//Author-Huma Mohsin
