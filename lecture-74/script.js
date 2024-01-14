let button = document.getElementById("btn")
// list of all mouse events 

//Single click
// button.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Hey you were clicked</b> Enjoy Your Click!"
// })

// Double click
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Hey you were clicked</b> Enjoy Your Click!"
})

//contextmenu clicking on right click then pop up alert shows
button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right click Please")
})

//
button.addEventListener("keydown", (e)=>{
    console.log(e, e.key+" "+e.keyCode);
})