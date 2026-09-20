const burger = document.getElementById("burger");
const burgermenu = document.getElementById("burgermenu");

let isopen = false;
let cooldown = false;

function openburger() {
    if (cooldown == true) return;

    if (isopen == false) {
        burgermenu.style.display = "flex";

        isopen = true;
    } else {
        burgermenu.style.display = "none";

        isopen = false;
    }
}