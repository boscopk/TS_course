"use strict";
// Convert to more or less specific types
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem here, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
