// Write a TypeScript interface representing a Person with name (string) and age (number) properties. Then, implement a function that takes an object conforming to this interface and prints out "Name: [name], Age: [age]".

interface Person {
    name : string,
    age : number
}

function personInterface (param : Person) : void{
    console.log ("Name: " + param.name)
    console.log ("Age: " + param.age)
}

const Amie : Person = {name: "Spiff", age: 20}
personInterface(Amie)