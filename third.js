//Loops:

console.log("For Loop");

for(let i = 1 ; i<=10 ; i++){
    console.log("Javascript");
}

console.log("End of loop");

// To calculte the sum of ! to n number

console.log("For Loop");

let sum = 0;

for(let i = 1 ; i<=5 ; i++){
    sum = sum + i;;
}

console.log("Sum = " , sum);

/* infintie loop

for(let i = 1 ; i>=0 ; i++){
    console.log("Javascript");
}

console.log("End of loop");
*/

// While Loop

console.log("While Loop");

let i = 1;

while(i<=5){
    console.log("Javascript");
    i++;
}

//Do While Loop

console.log("Do While Loop");

let j = 20;

do{
    console.log("Javascript");
    i++;
}
while(i<=5);

//For-of Loop : used in strings and arrays
//Used to iterate over elements of string or aaray
//Syntax: for(let variable_name of String_Variable_Name or Array_Variable_name)

console.log("For-of Loop");

let str = "Apna College";

for(let i of str){
    console.log("i = " , i);
}

console.log("End of Loop");

//Size of String

let strs = "Javascript";

let size = 0;

for(let i of strs){
    console.log("i = " , i);
    size++;
}

console.log("String Size : " , size);

//for-in loop : used in objects and arrays
//Iterator m keys ki value aajati h
//Syntax : for(let key in objVar)

console.log("For-in Loop");

const student = {
    fullName : "Rahul",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

for(let i in student){
    console.log(i);
}

console.log("End of Loop");