// Problem 6: Phonebook Prefix Search
// Function name: searchByPrefix(phonebook, prefix)
// Statement:
//  Return an array of names that start with the given prefix.
// Test case 1
// Input:
// phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
// prefix = "ra";

// Output:
// ["rahim", "rafi"]

function searchByPrefix(phonebook, prefix) {
    let phonebookNames = Object.keys(phonebook);
    let searchableName = [];
    
    for (const name in phonebook) {
        if (name.startsWith(prefix)) {
            searchableName.push(name);
        }
    }
    return searchableName
}

let output = searchByPrefix({ rahim: "0181", karim: "0172", rafi: "0193" }, "ra");
console.log(output);