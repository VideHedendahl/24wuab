let layer = document.querySelector(".lager")
layer.addEventListener("click",showMenu)

let button = document.querySelector(".meny-knapp")
button.addEventListener("click",showMenu)


function showMenu(){
    let menu = document.querySelector("div.meny")
    menu.classList.toggle("show")

    let layer = document.querySelector(".lager")
    layer.classList.toggle("visible")
}