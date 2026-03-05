// for (let i = 1; i <= 200; i++) {
//     if (i === 101) {
//         break;
//     }
//     console.log(i);
// }

let sum = 0;
let num = 1;

while (true) {
    sum += num;
    if (sum >= 100) {
        break;
    }
    num++;
}

console.log("sum reached or exceeded 100:" + sum);
console.log("last number added:" + num);