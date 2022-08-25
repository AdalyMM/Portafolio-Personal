window.onunload=function(){
    window.scrollTo(0,0);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var elemHover = document.getElementsByClassName("contacto");
flip(elemHover);


async function flip(elem) {
    elemento = elem
    var logo = document.getElementById(elemento[0].id);
    logo.classList.add("flip");
    await sleep(3000);
    logo.classList.remove("flip");
    var logo = document.getElementById(elemento[1].id);
    logo.classList.add("flip");
    await sleep(3000);
    logo.classList.remove("flip");
    var logo = document.getElementById(elemento[2].id);
    logo.classList.add("flip");
    await sleep(3000);
    logo.classList.remove("flip");
    flip(elemento);
}