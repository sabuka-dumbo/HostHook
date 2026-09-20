const burger = document.getElementById("burger");
const burgermenu = document.getElementById("burgermenu");

let open = false;
let cooldown = false;

function openburger() {
    if (cooldown == false) {
        if (cooldown == false) {
            burgermenu.style.display = "flex";

            open = true;
        } else {
            burgermenu.style.display = "none";

            open = false;
        }
    }
}