// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// Naive Solution 

function divisibleBy (arr, divisor) {
    let result = [];
    for(let num of arr){
        if(num % divisor === 0){
            result.push(num);
        }
    }
    return result;
}