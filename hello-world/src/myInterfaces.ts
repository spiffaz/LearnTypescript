interface User {
    readonly dbId : number
    email : string
    userID : number
}

const spiff: User = { dbId : 12, email : "s@s.com", userID : 5}

spiff.email = "spiff@s.com"

// Cant modify read only values`

// Functions can also be included in interfaces

// This will give you all the properties of the interface that was extended
interface Admin extends User {
    role : "admin" | "ta" | "learner"
}
