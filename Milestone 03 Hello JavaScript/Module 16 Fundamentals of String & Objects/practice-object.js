const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passengerCapacity = 5;

// console.log(car);

const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(student.physics.marks);

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(student).length;
// console.log(count);

