// let fullname = prompt("Enter your fullname: ");
// let username = `@${fullname}${fullname.length}`;
// console.log("Your username:" , username)

// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e"|| char === "i" || char=== "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Mahak");

const countVowel = (str) => {
    let count = 0;
    for(let char of str){
        if(char === "a" || char === "e"|| char === "i" || char=== "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

countVowel("Mahakaa");