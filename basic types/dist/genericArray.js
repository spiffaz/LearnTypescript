"use strict";
function arrayValue(array1, value) {
    if (array1.includes(value)) {
        return true;
    }
    return false;
}
let result2 = arrayValue([1, 2, 3, 4, "cat"], 3);
console.log("And the answer is ..... : " + result2);
//# sourceMappingURL=genericArray.js.map