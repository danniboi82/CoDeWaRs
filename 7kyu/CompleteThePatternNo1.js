// ###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) 
// upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.



// function pattern(n) {
// let output = '';
// for(let i = 1; i <= n; i++){
//     if(i === n){
//         console.log(output);

//         output += `${String(i).repeat(i)}`;
//         continue;
//     }
//     output += `${String(i).repeat(i)}\n`;
// }
// console.log(output);
// }

function pattern (n){
    let output = [];
    for(let i = 1; i <= n; i++){
        output.push(Array(i + 1));


    }
    console.log(output);
}

pattern(5);
