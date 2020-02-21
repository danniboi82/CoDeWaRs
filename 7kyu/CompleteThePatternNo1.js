// ###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) 
// upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.



function pattern(n, row = 0, output = '') {
    if(n === row) return;

    if(n === output.length) {
        console.log(output);
        pattern(n, row + 1);
    }

    const add = output.length <= row ? row : ' ';
    pattern(n, row, output + add);
}