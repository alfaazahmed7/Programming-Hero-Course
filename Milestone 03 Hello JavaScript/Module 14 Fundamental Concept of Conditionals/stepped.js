const  price = 10000;

if(price >= 5000) {
    const discount = price * 10 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}

else if (price > 2500) {
    const discount = price * 5 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount)
}