// Implement a TypeScript function that takes a parameter of type any. Inside the function, use a type guard to check if the parameter is a number or a string. If it's a number, multiply it by 2. If it's a string, concatenate it with "Hello".

function anyParameter ( parameter : any) {
    if (typeof(parameter) === "number") {
        return parameter * 2
    } else if (typeof(parameter) === "string") {
        return ("Hello " + parameter)
    } else {
        return parameter
    }
}


let val1 = anyParameter("World")
console.log("Example result with string: " + val1)

val1 = anyParameter(10)
console.log("Example result with number: " + val1)

val1 = anyParameter([10,12,"test"])
console.log("Example result with array: " + val1)