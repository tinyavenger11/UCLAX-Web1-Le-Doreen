/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

// Single line comment: control + forward slash

/*---------------------------
| Multi-line comment: 2c
---------------------------*/

/*---------------------------
| Data Types: Numbers
---------------------------*/
console.group("DataTypes: Numbers");

const myNum1 = 234;
const myNum2 = 12;
console.log(myNum1 + myNum2);

console.groupEnd();

/*---------------------------
| Data Types: Strings
---------------------------*/

console.group("DataTypes: Strings");

const myStr1 = "I went to the ";
const myStr2 = "store";
console.log(myStr1 + myStr2);

console.groupEnd();

/*---------------------------
| Data Types: Template Strings
---------------------------*/
/* "Double quotes allow for single lines of text only."
Any additional lines are considered commands.
`Back ticks allow for multiple lines of text.`
*/

console.group("DataTypes: Template Strings");

const myTempStr = `
I can write
multi-line
stuff here.

${myNum1}

`;
console.log(myTempStr);

console.groupEnd();
