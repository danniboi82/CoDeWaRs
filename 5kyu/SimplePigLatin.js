// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    let result = [];
    for (let word of str.split(' ')) {
        if (word.match(/[a-zA-Z]/gi)) {
            result.push(`${word.slice(1) + word[0]}ay`);
        } else {
            result.push(word);
        }
    }
    return result.join(' ');
}