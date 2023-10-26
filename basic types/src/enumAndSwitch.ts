// Create a TypeScript enum representing days of the week. Write a function that takes a day of the week as a parameter and returns a message indicating whether it's a weekday or a weekend day. Use switch statement

enum dayOfTheWeek {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function evaluateDayOfTheWeek (day : dayOfTheWeek) : string {
    switch (day) {
        case 2:
            return "Weekday"

        case 3:
            return "Weekday"

        case 4:
            return "Weekday"

        case 5:
            return "Weekday"

        case 6:
            return "Weekday"

        case 1:
            return "Weekend"

        case dayOfTheWeek.Sunday: // Can be done this way also
            return "Weekend"
    
        default:
            return "Invalid option"
    }

}

let result1 = evaluateDayOfTheWeek(2)
console.log("Passed in a weekday with the number, result is : " + result1)

result1 = evaluateDayOfTheWeek(1)
console.log("Passed in a weekend with the number, result is : " + result1)