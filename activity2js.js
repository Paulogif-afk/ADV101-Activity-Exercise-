
let words = ["apple", "banana", "orange", "grape", "kiwi"];

let reversedUpperCase = [];

for (let i = 0; i < words.length; i++) {
    let reversedWord = '';
    let currentWord = words[i];
    
    for (let j = currentWord.length - 1; j >= 0; j--) {
        reversedWord += currentWord[j];
    }

    reversedUpperCase.push(reversedWord.toUpperCase());
}

console.log(reversedUpperCase);
