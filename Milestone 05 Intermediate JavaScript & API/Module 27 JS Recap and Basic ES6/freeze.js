const king = {name: "mufasa", age: 55, kingdom: "pride lands"};
// Object.freeze(king);
delete king.age;
delete king.kingdom;
Object.seal(king);
king.queen = "sarabi";
king.name = "king simba";
console.log(king);

// object.seal
// Object.seal() is a built-in JavaScript method used to restrict changes to an object’s structure while still allowing modification of existing properties.

// object.freeze
// Object.freeze() is a JavaScript method that makes an object completely immutable.
// ❌ Cannot add new properties
// ❌ Cannot delete existing properties
// ❌ Cannot modify existing property values
// ❌ Cannot change property descriptors