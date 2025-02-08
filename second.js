//Arithematic Operators: 

let a = 5;
let b = 2;

console.log(" a = " , a , "& b = " , b);
console.log(" a + b = " , a + b);
console.log(" a - b = " , a - b);
console.log(" a * b = " , a * b);
console.log(" a / b = " , a / b);
console.log(" a % b = " , a % b); // Modulus
console.log(" a ** b = " , a ** b); //Exponentional 5^2

//Unary Operator
console.log(" a = " , a);
console.log(" a++ = " , a++); //5
console.log(" a = " , a); //6
console.log(" a-- = " , a--); //6
console.log(" a = " , a); // 5
console.log(" ++a = " , ++a); // 6
console.log(" a = " , a); // 6
console.log(" --a = " , --a); //5
console.log(" a = " , a); // 5

//alert("Hello") // alert: one time pop-up message.
// let name = prompt("hello");
// console.log(name);

//Practice Question: 1

let number = prompt("Enter a number: ");

console.log(number);

if(number%5==0){
    console.log("True");
}
else{
    console.log("False")
}

//Practice Question: 2

// let score = 75;
// let grade;

// if(score>=90 && score<=100){
//     grade = "A";
// }
// elseif(score>=70 && score<=89) {
//     grade = "B"; 
// }
// elseif(score>=60 && score<=69) {
//     grade = "C";
// }
// elseif(score>=50 && score<=59) {
//     grade = "D";
// }
// elseif(score>=0 && score<=49) {
//     grade = "E";
// }

// console.log(grade)