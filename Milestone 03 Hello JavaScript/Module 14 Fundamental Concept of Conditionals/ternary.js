/**
 * Ternary - Three parts:
 * condition ? valueifTrue : valueifFalse 
 */ 

const age = 18;

// if(age >= 18) {
//     console.log("You can enter")
// }

// else {
//     console.log("You cannot vote")
// }


// age >= 18 ? console.log('You can vote') : console.log('You cannot vote')

let price = 1200;
const isLeader = true;

// if(isLeader === false) {
//     price = 0;
// }

// else {
//     price = price + 100;
// }

console.log(price)

price = isLeader === true ? 0 : price + 100;

if(isLeader === true) {
    if(price > 1000) {
        price = price / 2;
    }

    else {
        price = 0;
    }
}

else {
    price = price + 1000;
}

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;