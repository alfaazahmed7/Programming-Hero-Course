let data;
data = 0;
data = "";
data = "0";
data = " "
data = false;
data = true;
data = null;
data = undefined;
data = {};
data = [];

if (data) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

// Flasy values
// false
// 0
// -0
// 0n          // BigInt zero
// ""          // empty string
// null
// undefined
// NaN

// Truthy values
// true
// 1
// -1
// "0"
// "false"
// " "
// []
// {}
// function(){}
// new Date()
// Infinity