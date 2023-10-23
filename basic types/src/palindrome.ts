// Implement a TypeScript function to determine if a string is a palindrome.
let word : string = "car"

function isPalindrome (word : string) : boolean {
    let clean_word : string = word.toLowerCase()
    return clean_word.split('').reverse().join('') === word
}

console.log (word + " is a palindrone?" + isPalindrome(word))