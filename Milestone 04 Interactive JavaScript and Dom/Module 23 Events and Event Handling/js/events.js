// console.log("events.js is connected");

// option 2 to handle event
function makeGreen() {
    document.body.style.backgroundColor = "green";
}

function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option 03 get element by id then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function () {
    document.body.style.backgroundColor = "blue";
}

// option 04 different version
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = "purple";
}