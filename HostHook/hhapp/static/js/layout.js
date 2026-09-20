const burger = document.getElementById("burger");
const burgermenu = document.getElementById("burgermenu");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let isopen = false;
let cooldown = false;

function openburger() {
    if (cooldown == true) return;

    if (isopen == false) {
        burgermenu.style.display = "flex";

        cooldown = true;
        span1.style.animation = "open-span1 ease 0.5s";
        span2.style.animation = "open-span2 ease 0.5s";
        span3.style.animation = "open-span3 ease 0.5s";
        burgermenu.style.animation = "open-navmenu ease 1s";

        burgermenu.addEventListener("animationend", function() {
            burgermenu.style.animation = '';
            burgermenu.style.top = "calc(48px + (16px * 2))";

            cooldown = false;
        });

        span3.addEventListener("animationend", function() {
            span1.style.animation = '';
            span2.style.animation = '';
            span3.style.animation = '';
            span1.style.top = "8px";
            span1.style.rotate = "45deg";

            span3.style.top = "-8px";
            span3.style.rotate = "-45deg";

            span2.style.opacity = "0";
        });

        isopen = true;
    } else {
        burgermenu.style.display = "none";

        cooldown = true;
        span1.style.animation = "close-span1 ease 0.5s";
        span2.style.animation = "close-span2 ease 0.5s";
        span3.style.animation = "close-span3 ease 0.5s";
        burgermenu.style.animation = "close-navmenu ease 1s";

        burgermenu.addEventListener("animationend", function() {
            burgermenu.style.animation = '';
            burgermenu.style.top = "-400px";
            
            cooldown = false;
        });

        span3.addEventListener("animationend", function() {
            span1.style.animation = '';
            span2.style.animation = '';
            span3.style.animation = '';

            span1.style.top = "0px";
            span1.style.rotate = "0deg";

            span3.style.top = "0px";
            span3.style.rotate = "0deg";

            span2.style.opacity = "1";
        });

        isopen = false;
    }
}