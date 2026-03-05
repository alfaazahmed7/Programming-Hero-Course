// step-1. seletct the button element
const btnMakeGreen = document.getElementById("btn-green");

// step-2. add click event to toggle background color
btnMakeGreen.onclick = function () {
    // Step-3. Check the current background color
    const currentColor = document.body.style.backgroundColor;

    // step-4. toggle the color
    if (currentColor === "green") {
        // step-5. if it's green, chate it to white
        document.body.style.backgroundColor = "white";
        this.textContent = "Make Green"
    }

    else {
        // step-6. if it's not green, change it to green
        document.body.style.backgroundColor = "green";
        this.textContent = "Make White";
    }
};