// document.querySelector(".box");
// document.querySelector(".box").innerHTML
// document.querySelector(".container").innerHTML
// document.querySelector(".container").tagName
// document.querySelector(".container").nodeName
// document.querySelector(".container").textContent
// document.querySelector(".container").hidden
// document.querySelector(".container").hidden = true
// document.querySelector(".box").innerHTML = "Hey i am new text"
// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style", "display: inline")
// document.querySelector(".box").attributes
// document.querySelector(".box").removeAttribute("style");

// to chnage the data or the information in any websites using the design mode
// document.designMode = "on";

// document.querySelector(".box").dataset

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>By Gaurav</b>"
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").replaceWith(div);

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "<b> I am under the water, please help me here too much raining.... iuuuuuoooooo</b>") 

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterbegin", "<b> I am under the water, please help me here too much raining.... iuuuuuoooooo</b>")

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("beforebegin", "<b> I am under the water, please help me here too much raining.... iuuuuuoooooo</b>") 

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforeend", "<b> I am under the water, please help me here too much raining.... iuuuuuoooooo</b>") 

// document.querySelector(".box").remove

document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.add("gaurav")
document.querySelector(".container").classList.remove("gaurav")
document.querySelector(".container").classList.toggle("gaurav")