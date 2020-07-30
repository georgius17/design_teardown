let menuBut = document.getElementById("menuBut");
let menu = document.getElementById("menu");

menuBut.addEventListener("click", () => {
    if (menu.style.display === "flex"){
        menu.style.display="none";
    } else {
        menu.style.display="flex";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 766) {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
})