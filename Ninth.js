// console.log(window)
// console.log(window.document)
// console.dir(window.document)

// console.log(document.body);
// console.dir(document.body);

// // console.dir(document.body.childNodes(1));

// console.log(document.head);
// console.dir(document.head);

// console.dir(document.body.childNodes[1]);

// document.body.style.background = "green";

// document.body.childNodes[3].innerText = "Heading";

// let heading = document.getElementById("myClass");
// //console.log(heading)    
// console.dir(heading);

// let classes = document.getElementsByClassName("myClass");
// console.log(classes);    
// console.dir(classes);

// let tags = document.getElementsByTagName("p");
// console.log(tags);    
// console.dir(tags);

// let firstEl = document.querySelector("p");
// console.log(firstEl);

// let firstEle = document.querySelectorAll("p");
// console.log(firstEle);

// let clas = document.querySelectorAll(".myClass");
// console.log(clas);
// let ids = document.querySelector("myID");
// console.log(ids);

// console.log(firstEl.tagName);

// //Properties: nodes k liye: firstChild , lastChild
// //text , comment , element node : MDN Document

// console.log(document.body.firstChild);
// console.log(document.body.firstChild);

let mydiv = document.querySelector("div");
console.dir(mydiv);

console.log(mydiv.innerText);
console.log(mydiv.innerHTML);

// mydiv.innerHTML
// '\n        <h3>Fruits</h3>\n        <ul>\n            <li>Mango</li>\n            <li>Apple</li>\n            <li>Litchi</li>\n        </ul>\n    '
// mydiv.innerText
// 'Fruits\nMango\nApple\nLitchi'
// mydiv.innerText = "Banana";
// 'Banana'
// mydiv.innerHTML = "<i>Banana<\i>";
// '<i>Banana<i>'
// mydiv.innerHTML
// '<i>Banana<i></i></i>'
// mydiv.innerText
// 'Banana'

let heading = document.querySelector("h1");

console.log(heading)
console.log(heading.innerText)
console.log(heading.textContent)