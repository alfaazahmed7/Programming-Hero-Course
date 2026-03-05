const phones = [
    {name: "Samsumg", price: 20000, Camera: "20mp", Color: "While"},
    {name: "Xoami", price: 18000, Camera: "20mp", Color: "While"},
    {name: "Oppo", price: 30000, Camera: "20mp", Color: "While"},
    {name: "Iphone", price: 100000, Camera: "20mp", Color: "While"},
    {name: "Walton", price: 31000, Camera: "20mp", Color: "While"},
    {name: "Blacberry", price: 60000, Camera: "20mp", Color: "While"},
]

function getHighestPhone (phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price > min.price) {
            min = phone;
        }
    }
    return min;
}

const highest = getHighestPhone(phones);
console.log("The highest price phone is:", highest);