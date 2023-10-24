// Write a TypeScript function to find the nth number in the Fibonacci sequence.
// 0 1 1 2 3 5 8

function fibonacci (n : number) : number {
    if (n <= 1) {
        return n
    }
    let prev = 0
    let current = 1
    for (let index = 2; index <= n; index++) {
        let temp = current
        current = current + prev
        prev = temp
    }
    return current
}

let fibresult = fibonacci(6)
console.log ("The fibonacci number is " + fibresult)