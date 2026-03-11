document.getElementById("btn-update-title")
    .addEventListener("click", function () {
        const pageTitleElement = document.getElementById("page-title");
        pageTitleElement.innerText = "Updated Page Title Text"
    });

// handle input text
// 1.set event listener
document.getElementById("btn-update")
    .addEventListener("click", function () {
        // 2.get the text form the input field
        const nameInput = document.getElementById("input-name");
        const name = nameInput.value;
        console.log("name", name);

        //set the name
        const nameP = document.getElementById("name");
        nameP.innerText = name;
    });