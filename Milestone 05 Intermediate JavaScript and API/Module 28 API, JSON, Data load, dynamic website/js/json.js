const person = {
    name: "selim",
    fruit: "dalim",
    dish: "halim",
    friends: ["alim", "kolim", "lamim"],
    isRich: false,
    money: 34000
};

// json - js object with notation
// JSON.stringify
const personJson = JSON.stringify(person);
console.log(personJson);

// convert to object
const parseJson = JSON.parse(personJson);
console.log(parseJson);

// fetch() function
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')

        // promise of response
        .then(response => response.json())

        // promise of json data
        .then(json => console.log(json))
};

// fetch()
// fetch() is a built-in JavaScript function used to make HTTP requests to servers (APIs).
// 👉 fetch() allows your JavaScript code to talk to a server.

// We use fetch() to:
// .Get data from an API (GET)
// .Send data to server (POST)
// .Update data (PUT / PATCH)
// .Delete data (DELETE)