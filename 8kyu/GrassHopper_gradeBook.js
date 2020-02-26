// Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//Naive Solution
function getGrade(s1, s2, s3) {
    // Code here
    let avgScore = (s1 + s2 + s3) / 3;
    console.log(Math.round(avgScore));
    if (avgScore <= 100 && avgScore >= 90) {
        return "A";
    } else if (avgScore <= 89 && avgScore >= 80) {
        return "B";
    } else if (avgScore < 80 && avgScore >= 70) {
        return "C";
    } else if (avgScore < 70 && avgScore >= 60) {
        return "D";
    } else {
        return "F";
    }
}