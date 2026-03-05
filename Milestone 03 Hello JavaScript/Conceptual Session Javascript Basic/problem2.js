// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

function analyzeMarks(markObj) {
    let total = 0;

    let highestMark = -Infinity;
    let lowestMark = Infinity;

    let hightesSubject = null;
    let lowestSubject = null;

    for (let subject in markObj) {
        let mark = markObj[subject];
        total = total + mark;

        if (mark > highestMark) {
            highestMark = mark;
            hightesSubject = subject;
        }

        if (mark < lowestMark) {
            lowestMark = mark;
            lowestSubject = subject;
        }
    }

    let average = total / Object.keys(markObj).length;
    return {
        total,
        average,
        hightesSubject,
        lowestSubject
    };
}


let output = analyzeMarks({
    math: 78,
    english: 65,
    physics: 88,
    bangla: 55,
    biology: 99,
});
console.log(output);

//let mark = markObj[subject];
// markObj["math"]
// 78