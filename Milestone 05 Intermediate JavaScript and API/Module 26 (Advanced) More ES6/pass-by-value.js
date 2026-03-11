// Pass by Value (Primitives)
// Primitive types are passed by value.
// Changes inside the function do NOT affect the original variable.

function change(x) {
  x = 20;
}

let num = 10;
change(num);

console.log(num);