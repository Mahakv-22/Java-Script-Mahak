let btn = document.querySelector("#btn1");

// btn.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);
    // console.log("Button 1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);
// }

// onmouseover="console.log('You are inside div');"

let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//      console.log('You are inside div');
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// }

//Event Listeners:

btn.addEventListener("click" , (e) => {
    console.log("Button 1 was clicked - handler 1");
    // console.log(e);
    //  console.log(e.type);
    //  console.log(e.target);
    //  console.log(e.clientX , e.clientY);

})

btn.addEventListener("click" , () => {
    console.log("Button 1 was clicked - handler 2");
})

const handler3 = () => {
    console.log("Button 1 was clicked - handler 3");
}

btn.addEventListener("click" , handler3)

btn.addEventListener("click" , () => {
    console.log("Button 1 was clicked - handler 4");
})

btn.removeEventListener("click" , handler3)