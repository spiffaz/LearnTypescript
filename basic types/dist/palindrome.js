"use strict";
let word = "car";
function isPalindrome(word) {
    let clean_word = word.toLowerCase();
    return clean_word.split('').reverse().join('') === word;
}
console.log(word + " is a palindrone?" + isPalindrome(word));
//# sourceMappingURL=palindrome.js.map