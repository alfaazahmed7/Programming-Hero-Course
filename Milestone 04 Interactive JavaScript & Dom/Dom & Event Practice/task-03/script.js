const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function () {
    const paraElement = document.getElementById("page-des");
    const currentDisplay = paraElement.style.display

    if (currentDisplay === "none") {
        paraElement.style.display = "block";
        this.textContent = "Hide Text";
    }

    else {
        paraElement.style.display = "none";
        this.textContent = "Show Text";
    }
});