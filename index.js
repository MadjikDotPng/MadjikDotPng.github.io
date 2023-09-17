function startUp() {

let numm = Math.floor(Math.random() * 5);

if (numm == 0) {
    document.getElementById("rand1").innerHTML = "Making Trash";
    document.getElementById("rand2").innerHTML = "Est. 2020";
} else if (numm == 1) {
    document.getElementById("rand1").innerHTML = "Literally";
    document.getElementById("rand2").innerHTML = "1984";
} else if (numm == 2) {
    document.getElementById("rand1").innerHTML = "Try Netscape!";
    document.getElementById("rand2").innerHTML = "NOW.";
} else if (numm == 3) {
    document.getElementById("rand1").innerHTML = "Powered by";
    document.getElementById("rand2").innerHTML = "amphetamine.";
} else if (numm == 4) {
    document.getElementById("rand1").innerHTML = "Is a cutie.";
    document.getElementById("rand2").innerHTML = "Will kill you.";
} else {
    document.getElementById("rand2").innerHTML = "Lol.";
}
}