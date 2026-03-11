const emplyee = {
    name: "john Doe",
    1: "desk one",
    "home-address": "123 main statusbar",
    salary: 50000,
    family: {
        father: "Richard Doe",
        mother: {
            name: "Jane Doe",
            age: 55
        }
    },
    position: "software engineer"
};

// dot notation
console.log(emplyee.name);
console.log(emplyee.salary);

// bracket notation
console.log(emplyee["name"]);
console.log(emplyee[1]);

const money = emplyee["salary"];
const key = "position";
const key2 = "salary";
console.log(emplyee[key]);
console.log(emplyee[key2]);