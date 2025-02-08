// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class" , "newClass"));

// console.log(div.style)
// div.style.backgroundColor = "lightGreen";

// div.style.fontSize = "26px";

// div.innerText = "Hello, Mahak!";

// div.style.visibility = "hidden";

let newbtn = document.createElement("button");
newbtn.innerText = "Click me";

console.log(newbtn);

let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
div.after(newbtn);

let para = document.querySelector("p");

para.after(newbtn)

let newHeading = document.createElement("h1");

newHeading.innerText = "Welcome to JavaScript!";

document.querySelector("body").prepend(newHeading);