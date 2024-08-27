/*===================================
||
|| Variables
||
===================================*/

console.group("Variables");

/*
What is a variable?
A variable is a reference to a value so it can be used over and over again, or referenced later on.
*/

// Let can be changed.
let favColor = "Blue";

console.log(favColor);
favColor = "Red";
console.log(favColor);

// Const cannot be changed
const firstName = "Reeny";
console.log(firstName);
// firstName = "Doreen";
// console.log(firstName);

console.groupEnd();
