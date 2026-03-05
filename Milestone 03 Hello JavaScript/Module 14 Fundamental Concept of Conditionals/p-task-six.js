const age = 65;
const price = 800;

if (age < 10) {
    console.log("Free")
}

else if (age <= 25) {
    const discount = price * 50 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else if (age >= 60) {
    const discount = price * 15 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else {
    console.log(price)
}