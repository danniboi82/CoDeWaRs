// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2n d argument(also a string).

// Examples:

//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// Naive Solution
// function solution(str, ending) {
//     // TODO: complete
//     if (str[str.length - 1] === ending[ending.length - 1]) {
//         return str.includes(ending);
//     } else if (ending === '') {
//         return true;
//     } else {
//         return false;
//     }
// }

// Short Solution
// Simply use the endswith string method

function solution (str, ending) {
    return str.endsWith(ending);
}