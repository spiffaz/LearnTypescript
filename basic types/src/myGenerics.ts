


const score: Array<number> = []
 const names: Array<string> = []

function identityOne (val : boolean| number) : boolean | number {
    return val
}

function identityTwo (val : any) : any {
    return val
}

// This cretes a funciton, identifies the input type and makes it the type
function identityThree<Type> (val: Type): Type {
    return val
}

identityThree(true)

// Can be any character, just has to be consistent
function identityFour<T> (val: T): T {
    return val
}

interface Bottle {
    brand : string,
    type : number
}



