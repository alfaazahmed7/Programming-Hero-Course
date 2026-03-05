// callback function - A function passed into another function as an argument, which is then executed later.

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alex", sayBye);