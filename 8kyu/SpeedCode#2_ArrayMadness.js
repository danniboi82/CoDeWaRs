// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program 
// that returns true if the sum of the squares of each element in a is 
// strictly greater than the sum of the cubes of each element in b.

// E.g.

// array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
// // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

function array_madness(a, b){
    let aSquared = a.reduce((total, num ) => total += Math.pow(num, 2), 0);
    let bCubed = b.reduce((total, num ) => total += Math.pow(num, 3), 0);
    return aSquared > bCubed;
}