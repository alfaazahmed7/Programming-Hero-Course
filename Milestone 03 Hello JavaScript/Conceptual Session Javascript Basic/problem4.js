// Problem 4: Shopping Bill Calculator
// Function name: calcBill(prices, items)
// Statement:  Calculate total bill amount and count how many times each item appears.
// Test case 1
// Input:
//      prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//      items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

// Output:
// {
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

function calcBill(prices, items) {
    let itemCount = {};

    for (let item of items) {
        if (itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        }
        else {
            itemCount[item] = 1;
        }
    }

    let total = 0;
    for (let item in itemCount) {
        let price = prices[item];
        let quantitiy = itemCount[item];
        let totalPriceWithQuantity = price * quantitiy;
        total = total + totalPriceWithQuantity;
    }

    return {
        total,
        itemCount,
    };
}

let output = calcBill({ pen: 10, book: 50, }, ["pen", "pen", "book", "pen"]);
let output2 = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
    "egg",
    "egg",
    "rice",
    "oil",
    "egg",
    "sugar",
])
console.log(output, output2);