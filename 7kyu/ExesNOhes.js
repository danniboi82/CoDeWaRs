// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Naive Solution 
function XO(str) {
    str = str.toUpperCase();
    let sObj = {};
    if (!str) return true;
    for (let char of str) {
        sObj[char] = (sObj[char] || 0) + 1;
    }
    return sObj.O === sObj.X ? true : false;
}