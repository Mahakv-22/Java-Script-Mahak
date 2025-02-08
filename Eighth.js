console.log("Map Method: ");

let nums = [2,3,4,5,6];

nums.map((val) => {
    console.log(val);
})

let newArray = nums.map((val) => {
    //return val;
    return val*val;

})
console.log(nums);
console.log(newArray);

console.log("Filter Method: ");

let arr = [5,6,2,1,101,3];

let evenArray = arr.filter((val) => {
    return val%2 === 0;
})

console.log(evenArray);

console.log("Reduce Method: ");

const output = arr.reduce((res , val) => {
    return res + val;
});

console.log(output)

//Largest element in the array:

console.log("Largest Number in the array: ")

const largest = arr.reduce((prev , current) => {
    return prev>current ? prev : current;
})

console.log(largest);

//Practice Question:
console.log("Marks of student that score 90+: ");
let marks = [87,93,64,99,86];

const score = marks.filter((val) => {
    return val>=90;
})

console.log(score);

console.log("Practice Question 2: ");

let n = prompt("Enter a number: ");

let newArr = [];

for(i=1;i<=n;i++){
    newArr[i-1] = i;
}

console.log(newArr);

const sums = newArr.reduce((prev,curr) => {
    return prev + curr;
})

console.log("Sum: " , sums);

const product = newArr.reduce((prev , curr) => {
    return prev*curr;
})

console.log("Product: ",product);