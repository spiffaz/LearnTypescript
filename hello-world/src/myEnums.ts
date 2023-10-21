const aisle = 0
const middle = 1
const WINDOW = 2

if (aisle === 0) {
    // condition
}

// This is not efficient. Use enums instead

enum SEATCHOICE {
    TYPE1 = 10,
    TYPE2,
    TYPE3,
    TYPE4
}

let SEATCHOICES = SEATCHOICE.TYPE1

// First value by default is 1. however values can be manually set. Can also be nultiple type

// Const can be added to the front of enums to simplify the generated havascript code eg


// enum SEATCHOICE {
//     TYPE1 = 10,
//     TYPE2,
//     TYPE3,
//     TYPE4
// }
