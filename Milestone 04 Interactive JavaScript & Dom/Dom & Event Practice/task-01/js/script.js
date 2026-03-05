// step-1. selet the button elelment
const btnGreen = document.getElementById("btn-green")

    // step-2. add a click event listener to the button
    .addEventListener("click", function () {

        // step-3. select the paragraph element
        const paragraphElement = document.getElementById("paragraph");

        // step-4. change the paragraph text
        paragraphElement.innerText = "The Button Has Been Clicked";
    });