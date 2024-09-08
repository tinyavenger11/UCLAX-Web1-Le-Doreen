/*===================================
||
|| Data Types: Objects
||
===================================*/

/*---------------------------
| Data Types: Objects
Objects are curly braced elements that keep property values in a group.
Objects are similar to arrays but they use named identifiers to define the values they store.
So an object has properties, and those properties can hold values.
---------------------------*/

console.group("DataTypes: Objects");

let myObj = {
    str: "Red",
    num: 8712,
    arr: [4, 8, 11, 12],
    fn: () => {
        console.log("This is a function assigned to an object.");
    },
};

myObj.fn();

// Everything is a object

let myArr = ["up", "down", 23];

console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements.");
}

myArr.sayWhat = "Say who?";

console.log(myArr);

console.groupEnd();
