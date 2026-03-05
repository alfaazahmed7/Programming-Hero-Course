function cToF (celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const result = cToF(10); 
console.log(result);