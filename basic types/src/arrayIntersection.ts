// Implement a TypeScript function to find the intersection of two arrays.

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [3, 4, 5, 6, 7];

function intersection <T>(array1 : T[], array2 : T[]) : T[] {
    const intersection: T[] = []
    for (const element of array1) {
        // Check if array2 has the value and if the value isnt already in the intersection array
        if (array2.includes(element) && !intersection.includes(element)) { 
            intersection.push(element)
        }
    }
    return intersection
}

const intersectionResult: number[] = intersection(array1, array2)
console.log("Intersection of the arrays:", intersectionResult)