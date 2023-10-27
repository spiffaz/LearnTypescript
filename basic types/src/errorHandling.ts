// Implement a TypeScript function that performs a division operation. Handle the case where the denominator is 0 and throw a custom error (e.g., ZeroDivisionError) in this scenario. Handle this error gracefully in the calling code.

function divide ( numerator : number, denominator : number) : number {
    if (denominator === 0) {
        throw new Error ('ZeroDivisionError')
    }
    return numerator/denominator
}

// function divide1 ( numerator : number, denominator : number) : number {
//     try {
//         let result = numerator/denominator
//     } catch (error) {
//         console.error(error)
//     }
//     return result
// }

let result3 = divide(2, 1)
console.log ("Two divided by 1 is : "  + result3)

result3 = divide(2 , 0)
console.log ("Two divided by 0 is : " + result3)