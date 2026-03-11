// create element and set innterText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "The Father of Mirza Abbas";

// find the parent where you will add the child
const playerList = document.getElementById("player-list");

// append the child to the parent
playerList.appendChild(newChild);