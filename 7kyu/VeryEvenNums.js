// Description:

// #Task:

// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

// #Examples:

// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

// input(222) => returns true

// input(5) => returns false

// input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be positive!

// Super Naive Solution
function isVeryEvenNumber(n) {
    let nSum = [...n.toString()].reduce((total, num) => total += parseInt(num), 0);
    let nlength = n.toString().length;
    let sumOfnSum = [...nSum.toString()].reduce((total, num) => total += parseInt(num), 0);
    let nSumLength = nSum.toString().length;
    let sumOfsos = [...sumOfnSum.toString()].reduce((total, num) => total += parseInt(num), 0);
    let sumOfsosLength = sumOfnSum.toString().length;
    let sumSumOfsos = [...sumOfsos.toString()].reduce((total, num) => total += parseInt(num), 0);
    let sumSumOfsosLength = sumOfsos.toString().length;


    if (n === 0) {
        return true;
    } else if (nlength === 1 && n % 2 === 0) {
        return true;
    } else if (nlength >= 2 && nSum % 2 === 0 && nSumLength === 1) {
        return true;
    } else if (nSumLength > 1 && sumOfnSum % 2 === 0 && sumOfsosLength === 1) {
        return true;
    } else if (sumOfsos % 2 === 0 && sumOfsosLength > 1 && sumSumOfsosLength === 1) {
        return true;
    } else if (sumSumOfsosLength > 1 && sumSumOfsos % 2 === 0) {
        return true;
    }
    return false;

}