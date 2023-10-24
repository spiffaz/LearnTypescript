"use strict";
function evenSumArray(array1) {
    let sum = 0;
    for (const element of array1) {
        if (element % 2 === 0) {
            sum = sum + element;
        }
    }
    return sum;
}
const sumresult = evenSumArray([1, 2, 3, 4, 4]);
console.log("The sum of even numbers in the array is :" + sumresult);
//# sourceMappingURL=arrayEvenSum.js.map