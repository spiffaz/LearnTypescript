// Create a TypeScript function that takes an array of numbers and returns the sum of all even numbers in the array.

function evenSumArray ( array1 : number[]) : number {
    let sum : number = 0
    for (const element of array1) {
        if (element % 2 === 0) {
            sum = sum + element
        }
    }
    return sum
}

const sumresult = evenSumArray([1,2,3,4,4])
console.log("The sum of even numbers in the array is :" + sumresult)