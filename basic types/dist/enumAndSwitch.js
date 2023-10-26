"use strict";
var dayOfTheWeek;
(function (dayOfTheWeek) {
    dayOfTheWeek[dayOfTheWeek["Sunday"] = 1] = "Sunday";
    dayOfTheWeek[dayOfTheWeek["Monday"] = 2] = "Monday";
    dayOfTheWeek[dayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    dayOfTheWeek[dayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    dayOfTheWeek[dayOfTheWeek["Thursday"] = 5] = "Thursday";
    dayOfTheWeek[dayOfTheWeek["Friday"] = 6] = "Friday";
    dayOfTheWeek[dayOfTheWeek["Saturday"] = 7] = "Saturday";
})(dayOfTheWeek || (dayOfTheWeek = {}));
function evaluateDayOfTheWeek(dayOfTheWeek) {
    switch (dayOfTheWeek) {
        case 2:
            return "Weekday";
        case 3:
            return "Weekday";
        case 4:
            return "Weekday";
        case 5:
            return "Weekday";
        case 6:
            return "Weekday";
        case 1:
            return "Weekend";
        case 7:
            return "Weekend";
        default:
            return "Invalid option";
    }
}
let result1 = evaluateDayOfTheWeek(2);
console.log("Passed in a weekday with the number, result is : " + result1);
result1 = evaluateDayOfTheWeek(1);
console.log("Passed in a weekend with the number, result is : " + result1);
//# sourceMappingURL=enumAndSwitch.js.map