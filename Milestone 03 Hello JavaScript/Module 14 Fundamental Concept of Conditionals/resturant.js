const age = 55;
const price = 500;

if (age <= 12) {
    console.log('You can eat for free')
}

else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else if (age <= 50) {
    // 25% discount
    const discount = price * 25 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else if (age <= 40) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else if (age <= 30) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else {
    console.log(price)
}