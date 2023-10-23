// Write a TypeScript function to find the factorial of a number.
let num : number = 12

function factorial(num:number) : number {
    if (num === 0 || num === 1) {
      return 1;
    } else {
        return num * factorial(num - 1);
    }
}

let result = factorial(num)
console.log("Factorial of " + num + " is " + result)