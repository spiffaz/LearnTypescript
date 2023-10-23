"use strict";
let num = 12;
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
let result = factorial(num);
console.log("Factorial of " + num + " is " + result);
//# sourceMappingURL=factorial.js.map