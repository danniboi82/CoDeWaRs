// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


//Naive Solution 
function isIsogram(str) {
    let strObj = {};
    for (let char of str.toLowerCase()) {
        strObj[char] = (strObj[char] || 0) + 1;
    }

    for (let val in strObj) {
        if (strObj[val] > 1) return false;
    }
    return true;
}