let greetings : string = "Hello World!";

console.log(greetings);

// number
let userid : number = 334455;

// boolean
let isLoggedIn : boolean = false;

// Function to add number
function AddTwo( num : number) : number {
    return num + 2
}
AddTwo(5)

function signUp (name: string, email: string, isPaid: boolean) {

}

// Arrow function (same but different syntax)
let loginUser = (name: string, email?: string, isPaid: boolean = false) => {}

loginUser("h")

// Returning more than 1 type from a function 

// function returnVal (val: number) {
//     if (val > 5) {
//         return true
//     }
//     return "200 OK"
// }

// For errors
function returnError (errmsg: string) : never {
    throw new Error(errmsg);
}

// Objects

const User = {
     name: "Spiff",
     email: "spiff@spiff.com",
     isActive : true 
}

function createCourse():{name: string, price: number}{
    return {name: "Angular", price: 200}
}

type User = {
    name : string;
    email : string;
    isActive : boolean
}

function createUser (user: User) {

}

createUser ({name: "", email: "", isActive: true})

let superhero : [] 

let superheros : string[]

let superheroes : (string | number) []= [1, "2"]

superheroes.push(3)


export{}