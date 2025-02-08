let h2 = document.querySelector("h2");

console.dir(h2);
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from apna college Students";

let div = document.querySelectorAll(".box");
console.log(div[0]);
console.log(div[1]);
console.log(div[2]);

div[0].innerText = "Unique value 1";
div[1].innerText = "Unique value 2";
div[2].innerText = "Unique value 3";