"use strict";
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('ZeroDivisionError');
    }
    return numerator / denominator;
}
let result3 = divide(2, 1);
console.log("Two divided by 1 is : " + result3);
result3 = divide(2, 0);
console.log("Two divided by 0 is : " + result3);
//# sourceMappingURL=errorHandling.js.map