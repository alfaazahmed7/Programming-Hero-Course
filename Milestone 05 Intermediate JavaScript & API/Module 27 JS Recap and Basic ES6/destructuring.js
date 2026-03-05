// object destructuring
const {name, price} = {name: "Iphone", price: "$799", brand: "Apple"};
console.log(price);

// array destructuring
const [first, second, third = 45 + 5] = [10, 20];
console.log(first, second, third);