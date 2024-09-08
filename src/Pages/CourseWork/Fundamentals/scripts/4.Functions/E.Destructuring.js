/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/

console.group("Functions: Destructuring");

const readPerson = (personObj) => {
    const { first, last, email, colors } = personObj;

    console.log(`Hey, ${first} ${last}, your email is ${email}`);

    console.log("Your favorite colors are");

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Reeny",
    last: "Le",
    email: "doreen.t.le@gmail.com",
    colors: ["red", "green", "blue"],
};
const person2 = {
    first: "Donna",
    last: "Le",
    email: "donna.t.le@gmail.com",
    colors: ["cyan", "magenta", "yellow"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
