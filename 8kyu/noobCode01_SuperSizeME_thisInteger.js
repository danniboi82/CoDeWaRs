// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.



//Naive Solution
function superSize(num) {
    if (num.toString().length <= 1) return num;
    return Number([...num.toString()].sort((a, b) => b - a).join(''));
}


console.log(superSize(123456));