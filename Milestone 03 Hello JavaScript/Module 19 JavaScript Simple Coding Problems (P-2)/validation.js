function fullName (first, second) {
    if (typeof first !== "string") {
        return "First name should be a string";
    }
    else if (typeof second !== "string") {
        return "Second name should be a string";
    }
    const full = first + " " + second;
    return full;
}

const full = fullName(5);
console.log(full);