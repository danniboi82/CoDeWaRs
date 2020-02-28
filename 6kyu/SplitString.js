// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

//Naive Solution
function solution(str) {
    return str.split(/([a-z][a-z])/gi)
        .filter(Boolean)
        .map(char => char.length % 2 === 0 ? char : `${char}_`);
}

