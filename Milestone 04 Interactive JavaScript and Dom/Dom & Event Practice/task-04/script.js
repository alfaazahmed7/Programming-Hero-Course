const paraElement = document.getElementById("page-des");
const buttons = document.querySelectorAll(".color-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function () {
        const color = this.dataset.color;
        paraElement.style.color = color;
    });
});