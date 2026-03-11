const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
    section.style.backgroundColor = "green";
    section.style.padding = "10px";
    section.style.borderRadius = "10px";
    section.style.marginBottom = "10px";
    section.style.border = "10px solid lightcoral"
}

// for (const section of sections) {
//     section.classList.add("section-card");
// }