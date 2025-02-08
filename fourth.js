let str = "Apna College";
let str2 = 'Mahak';

console.log(str);
console.log(str2);

console.log(str.length);
console.log(str2.length);

console.log(str[0]);
console.log(str2[0]);

//Template Literal

let specialString = `This is template literal`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item : "pen" , 
    price : 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let specialStringa = `This is template literal ${1+2+3}`;
console.log(specialStringa);

console.log("Mahak Vijayvargiya\nJiya Vijayvargiya");
let str3 = "Mahak\tJiya";
console.log("Mahak Vijayvargiya\tJiya Vijayvargiya");
console.log(str3.length);

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.trim());
console.log(str2.slice(1,3));
console.log(str2.concat(str));
console.log(str.replace("e","x"));
console.log(str2.charAt(4));