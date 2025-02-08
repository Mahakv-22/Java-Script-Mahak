let btn = document.createElement("button");

btn.innerText = "click me";
btn.style.backgroundColor = "Red";
btn.style.color = "White";

document.querySelector("body").prepend(btn);

//Question 2:

let para = document.querySelector("p");

para.classList.add("newClass")

// para.classList.remove("newClass")

console.log(para.classList);