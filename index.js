function startUp() {

let numm = Math.floor(Math.random() * 3);

if (numm == 0) {
    document.getElementById("rand").innerHTML = "How are you today?";
} else if (numm == 1) {
    document.getElementById("rand").innerHTML = "I like racoons.";
} else if (numm == 2) {
    document.getElementById("rand").innerHTML = "Meow UwU.";
} else {
    document.getElementById("rand").innerHTML = "Lol.";
}
}