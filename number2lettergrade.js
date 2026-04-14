//input
let nGrade = 75;
let letterGrade = "";

//processing
if(nGrade < 50) {
    letterGrade = "F";
} else if(nGrade >= 90) {
    letterGrade = "A+";
} else if (nGrade >= 85) {
    letterGrade = "A";
} else if (nGrade >= 80) {
    letterGrade = "A-";
} else if (nGrade >= 77) {
    letterGrade = "B+";
} else if (nGrade >= 73) {
    letterGrade = "B";
} else if (nGrade >= 70) {
    letterGrade = "B-";
} else if (nGrade >= 67) {
    letterGrade = "C+";
} else if (nGrade >= 63) {
    letterGrade = "C";
} else if (nGrade >= 60) {
    letterGrade = "C-";
} else if (nGrade >= 57) {
    letterGrade = "D+";
} else if (nGrade >= 53) {
    letterGrade = "D";
} else {
    letterGrade = "D-";
}

//output
console.log(`${nGrade} is equal to ${letterGrade}`);