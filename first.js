console.log("Welcome to JavaScript");
console.log("Mahak Vijayvargiya");
console.log("This is learning");

fullName = "Tonny Stark"; //String
age = 24; //Number
price = 99.99; // float
x = null; // null: pta toh h prr isk andr ek khali value h 
y = undefined; // undefined: pta nhi h kya h 
isFollow = false; // boolean value either true or false
let h = BigInt("123"); // The BigInt number is identified by n at last of the number i.e. 123n or XXXn.
let g = Symbol("Hello!");

console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(h);
console.log(g);

//Data Types in JavaScript: Primitive Data Types

typeof age; //number
typeof price; //number
typeof isFollow; //Boolean
typeof y; //undefined
typeof x; //object
typeof h; //BigInt
typeof g; //Symbol

/* let , const & var
var is not use now-a-days in java script

var: can be re-declared as well as updated. Global Scope Variable
let: cannot be re-declared but can be updated. Block Scope Variable
const: connot be re-declared or updated. Block Scope Variable */

let name = "Jhony";
let xage = 24;
let totalPrice = 1000;
const a = 55;

console.log(name);
console.log(a);

//redeclaration

name = "Jenny";
// a = 69; // this is not possible

console.log(name);
console.log(xage);
console.log(totalPrice);
console.log(a);

let s; //if let variable is not initiallized then it is undefined in javaScript
const p = 0; // a constant variable needs to be defined. It cannot be left uninitiallized. 

console.log(s);
console.log(p);

{
    let a = 5;
    //let a = 10; it is not possible to re-declare in this block but it can be re-declared in another block.
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}

//Object: Collection of values.

const student = {
    //key : values
    fullName : "Rahul",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student);
typeof student; //Object

console.log(student["fullName"]);
console.log(student["isPass"]);

console.log(student.age);
console.log(student.cgpa);

student.age = student.age + 1;
console.log(student.age);

student["fullName"] = "Rahul Sharma";
console.log(student.fullName);