let rlSync = require('readline-sync');

const METER_IN_SQUARE_FEET = 10.7639;

let length = rlSync.question("Enter the length of the room in meters: ");
length = parseInt(length, 10);
let width =  rlSync.question("Enter the width of the room in meters: ");
width = parseInt(width, 10);

roomAreaInMeters = length * width;
roomAreaInSquareFeet = roomAreaInMeters * METER_IN_SQUARE_FEET;
console.log(`The area of the room is ${roomAreaInMeters.toFixed(2)} square meters (${roomAreaInSquareFeet.toFixed(2)} square feet).`)