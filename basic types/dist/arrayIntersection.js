"use strict";
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function intersection(array1, array2) {
    const intersection = [];
    for (const element of array1) {
        if (array2.includes(element) && !intersection.includes(element)) {
            intersection.push(element);
        }
    }
    return intersection;
}
const intersectionResult = intersection(array1, array2);
console.log("Intersection of the arrays:", intersectionResult);
//# sourceMappingURL=arrayIntersection.js.map