let sideMenu = document.getElementById("sideMenu")
let times = document.querySelector(".fa-times")
let bars = document.querySelector(".fa-bars")
function openMenu(){
    sideMenu.style.right = "0"
    bars.style.display = "none"
    
}
function closeMenu(){
sideMenu.style.right = "-200px"
bars.style.display = "flex"
}