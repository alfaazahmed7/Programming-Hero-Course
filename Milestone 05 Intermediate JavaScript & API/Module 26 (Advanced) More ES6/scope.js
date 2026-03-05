// global scope - A variable declared outside any function or block is in the global scope.

// function scope - Variables declared inside a function are only accessible inside that function.

// block scope - Variables declared with let and const are block-scoped.

// temporat danger zone
console.log(a); // ❌ ReferenceError
let a = 5;
// Even though a is declared in the code, it cannot be used before the declaration line.