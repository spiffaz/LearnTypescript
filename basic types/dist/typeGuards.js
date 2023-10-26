"use strict";
function anyParameter(parameter) {
    if (typeof (parameter) == "number") {
        return parameter * 2;
    }
    else if (typeof (parameter) == "string") {
        return ("Hello " + parameter);
    }
    else {
        return parameter;
    }
}
let val1 = anyParameter("World");
console.log("Example result with string: " + val1);
val1 = anyParameter(10);
console.log("Example result with number: " + val1);
val1 = anyParameter([10, 12, "test"]);
console.log("Example result with array: " + val1);
//# sourceMappingURL=typeGuards.js.map