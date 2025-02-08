let btn = document.querySelector("button");
let currMode = "light";
let body = document.querySelector("body");

const mode = () => {
    if(currMode === "light"){
        currMode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
        btn.innerText = "Change to light mode";
        // alert("Mode changed to dark");
    }
    else{
        currMode = "light";
        //document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
        btn.innerText = "Change to dark mode";
        // alert("Mode changed to light");
    }
}

btn.addEventListener("click" , mode)