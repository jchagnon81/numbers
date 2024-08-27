"use strict";

//get 2 numbers from user
const num1 = parseInt(prompt("Enter the first number"));

const num2 = parseInt(prompt("Now enter a second number"));

//calculate the total
let total = num1 + num2;

//diplay the results on the page
const html = `<p>You entered ${num1} and ${num2} which equal ${total}</p>`;
document.write(html);