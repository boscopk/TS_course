"use strict";
// Literal Types
let myOtherName;
let userName;
userName = 'Jimmy';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(10, 5));
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (x, y) {
    return x * y;
};
logMsg(multiply(5, 10));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default Parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom Type Guards
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Using the never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return `String: ${value}`;
    }
    else if (isNumber(value)) {
        return `Number: ${value}`;
    }
    return createError('This should never happen');
};
