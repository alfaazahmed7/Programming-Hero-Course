// task. 01
const btnElement = document.getElementById("btn");
const countText = document.getElementById("count");

btnElement.addEventListener("click", function () {
    let currentCount = parseInt(countText.innerText);
    currentCount++;
    countText.innerText = currentCount;
});

// task-02
const wishlistButtons = document.querySelectorAll(".wishlist-btn-card");
let count = 0;

wishlistButtons.forEach(button => {
    button.addEventListener("click", function () {
        let wishCount = document.getElementById("wish-count");
        count++;
        wishCount.innerText = count;
    })
});