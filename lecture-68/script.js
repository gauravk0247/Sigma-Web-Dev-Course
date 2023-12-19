console.log("Hello World")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";


// it will change 1st color
// document.querySelector(".box").style.backgroundColor = "green";

// for all change the color we used the querySelectorAll

// console.log(document.querySelectorAll(".box")); // it is not work

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
    e.style.color="white";
})

document.getElementsByTagName("div");