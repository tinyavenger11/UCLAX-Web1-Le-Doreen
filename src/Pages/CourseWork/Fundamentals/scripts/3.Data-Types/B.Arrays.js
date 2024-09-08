/*===================================
||
|| Data Types: Arrays
||
===================================*/

/*---------------------------
| Data Types: Arrays
An array is like a collection of elements.
It can store all sorts of things.
Arrays use straight brackets.
---------------------------*/
console.group("DataTypes: Arrays");
const myNum1 = 1234;

let myArr = [12, "some string", `template strings`, myNum1];

console.log(myArr);

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

myArr.push("Some new string after declaration.");

console.log(myArr);

myArr.forEach((item, idx) => {
    console.log(item, idx);
});

console.groupEnd();
