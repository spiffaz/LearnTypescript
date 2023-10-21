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


superheroes.push(3);

// Tuple

type Super = [number, string];

let Super = [12, "eleven"];

// Classes
// class Users {
//     email : string
//     name : string
//     constructor(email: string, name: string ) {
//         this.email = email;
//         this.name = name;
//     }
// }


// Production level code
class Users {
    constructor(
        public email: string, 
         public name: string ) {
    }

    
    get getAppleEmail() : string {
        return `apple${this.email}`
    }

    
    
}

// The extend keywork can also be used for inheritance to extend classes
// However, private properties can not be inherited
// protected items/ variables are accessible to inherited classes only

// General typescript/ javascript convention. start private elements/variables with an _ eg private _isFood



const spiffuser = new Users("s@s.com", "spiff")


//  Classes can be used to implement interfaces. For example

interface TakePhoto {
    cameraMode : string
    filter : string
    burst : number
}

interface Story {
    createStory() : void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ) {}
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
        public short : string
    ) {}

    createStory(): void {
        console.log("story created")
    }
}

// Abstract classes are used as blueprints for creating other classes. They have to be extended to be used
export{}