// forEach Loop 

let array = [1,2,3,4,5];
let arrays = ["Pune" , "Hyderabad" , "Banglore"];

// array.forEach(function printVal(val) { // value at each index
//     console.log(val);
// })

array.forEach((val) => { // value at each index
    console.log(val);
})


arrays.forEach((val , index , arrays) => { // value at each index
    console.log(val.toUpperCase() , index , arrays);
})

// Practice Question: 

let nums = [2,3,4,5,6];

let calcSquare = (val) => {
    //console.log(val**2);
    console.log(val*val);
}

// nums.forEach((val) => {
//     //console.log(val**2);
//     console.log(val*val);
// })

nums.forEach(calcSquare);