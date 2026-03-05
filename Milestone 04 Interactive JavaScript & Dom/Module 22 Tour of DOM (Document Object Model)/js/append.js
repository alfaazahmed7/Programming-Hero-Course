// parent node
const mainContainer = document.getElementById("main-container");

// create child node
const placesSection = document.createElement("section");

// create tags
const h1 = document.createElement("h1");
h1.innerText = "Places I Want to Visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");
placesSection.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "Cox's Bazar";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Shundorban";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Bandarban";
ul.appendChild(li3);

// append placesSection to the mainContainer
mainContainer.appendChild(placesSection);

// easiest way
const bookSection = document.createElement("section");
bookSection.innerHTML = `
<h1>Books I Need to Read</h1>
<ul>
    <li>JavaScript With Mosh</li>
    <li>Learn JavaScript</li>
    <li>Become a Good Programmer</li>
</ul>
`
mainContainer.appendChild(bookSection);