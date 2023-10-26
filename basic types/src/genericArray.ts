// Write a TypeScript function that takes an array and a value. Use generics to create a function that checks if the value exists in the array. If it does, return true; otherwise, return false.

function arrayValue<T> ( array1 : T[], value : T) : boolean {
    if (array1.includes(value)) {
        return true
    }
    return false
}

let result2 = arrayValue([1,2,3,4, "cat"], 3)
console.log("And the answer is ..... : " + result2)