"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greetings = "Hello World!";
console.log(greetings);
let userid = 334455;
let isLoggedIn = false;
function AddTwo(num) {
    return num + 2;
}
AddTwo(5);
function signUp(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => { };
loginUser("h");
function returnError(errmsg) {
    throw new Error(errmsg);
}
const User = {
    name: "Spiff",
    email: "spiff@spiff.com",
    isActive: true
};
function createCourse() {
    return { name: "Angular", price: 200 };
}
function createUser(user) {
}
createUser({ name: "", email: "", isActive: true });
let superhero;
let superheros;
let superheroes = [1, "2"];
superheroes.push(3);
let Super = [12, "eleven"];
class Users {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
}
const spiffuser = new Users("s@s.com", "spiff");
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story created");
    }
}
//# sourceMappingURL=index.js.map